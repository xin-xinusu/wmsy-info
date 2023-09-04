import {
  DeleteObjectCommand,
  DeleteObjectCommandInput,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { randomUUID } from "crypto";
import { getMediaKeyFromS3Url } from "./keyUrlS3";

export class S3Service {
  static AWS_ACCESS_KEY = process.env.DIGITAL_OCEAN_ACCESS || "";
  static AWS_SECRET = process.env.DIGITAL_OCEAN_SECRET || "";
  static AWS_BUCKET_REGION = process.env.NEXT_PUBLIC_DIGITAL_OCEAN_BUCKET_REGION;
  static AWS_BUCKET_NAME = process.env.NEXT_PUBLIC_DIGITAL_OCEAN_BUCKET_NAME;
  static AWS_ENDPOINT = process.env.DIGITAL_OCEAN_ENDPOINT;

  static s3 = new S3Client({
    forcePathStyle: false,
    endpoint: this.AWS_ENDPOINT,
    region: this.AWS_BUCKET_REGION,
    credentials: {
      accessKeyId: this.AWS_ACCESS_KEY,
      secretAccessKey: this.AWS_SECRET,
    },
  });

  static getFileUrl(key) {
    return process.env.BUCKET_CDN_ENDPOINT + key;
  }

  static async deleteFileFromUrl(url) {
    const key = getMediaKeyFromS3Url(url);
    const params = {
      Bucket: this.AWS_BUCKET_NAME,
      Key: key,
    };
    const command = new DeleteObjectCommand(params);
    await this.s3.send(command);
    console.info(`Deleted image ${key} from AWS`);
    return key;
  }

  static async createUploadUrl(mimetype) {
    const key = randomUUID();
    const command = new PutObjectCommand({
      Bucket: this.AWS_BUCKET_NAME,
      Key: key,
      ContentType: mimetype,
    });
    const url = await getSignedUrl(this.s3, command, { expiresIn: 15 * 60 }); // expires in 15 minutes
    return { url, mimetype };
  }
}
