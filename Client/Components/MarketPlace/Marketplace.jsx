import { useContext, useEffect, useRef, useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import { WindowContext } from "../../contexts/window.context";
// import { useQuery } from "@apollo/client";
// import { GET_PROPERTIES } from "../../graphql/properties.query";
import { COLORS } from "../../utils/constants";
import {
  FiltersBar
} from "../FiltersBar/FiltersBar";

import {
  List,
  Variant,
} from "../List";

import { PropertyCardLine } from "../PropertyCardLine"; 
import { PropertyCardTile } from "../PropertyCardTile/PropertyCardTile"; 
import {
  MarketplaceWrapper,
  PropertyListWrapper,
} from "./MarketplaceStyles";
import { ColumnsPerSize, WidthsPerSize } from "./utils";
import { Loading, LoadingVariant } from "../Loading";


export const Marketplace = () => {
  const { windowSize } = useContext(WindowContext);
  const [variant, setVariant] = useState(Variant.TILE);
  const [nextPage, setNextPage] = useState(true);

  const [lastLength, setLastLength] = useState(0);

  const { data, error, loading, fetchMore } = null
  // useQuery(
  //   GET_PROPERTIES,
  //   {
  //     variables: { offset: 0, limit: 20 },
  //     notifyOnNetworkStatusChange: true,
  //     onCompleted: (data) => {
  //       if (nextPage) {
  //         setNextPage(data.properties.length !== lastLength);
  //         setLastLength(data.properties.length);
  //       }
  //     },
  //   }
  // );

  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && nextPage) {
          fetchMore({ variables: { offset: properties.length } });
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget, data?.properties]);

  const listProps =
    variant === Variant.TILE
      ? { variant }
      : {
          variant,
          columns: ColumnsPerSize[windowSize],
          widths: WidthsPerSize[windowSize],
        };

  if (error) {
    // TODO: get a design for error handling
    console.log(error);
    return <Loading variant={LoadingVariant.FULL} />;
  }

  const properties = data?.properties || [];

  return (
    <MarketplaceWrapper>
      <FiltersBar variant={variant} setVariant={setVariant} />
      <PropertyListWrapper>
        <List {...listProps}>
          {properties.map((property, index) =>
            variant === Variant.TILE ? (
              <PropertyCardTile key={index} property={property} />
            ) : (
              <PropertyCardLine key={index} property={property} />
            )
          )}
        </List>
        {loading && <PuffLoader color={COLORS.LIGHT_PURPLE} />}
      </PropertyListWrapper>
      <div ref={observerTarget} />
    </MarketplaceWrapper>
  );
};
