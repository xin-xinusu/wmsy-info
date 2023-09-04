import { PropsWithChildren } from "react";
import { TVariant, TWeight, Typography } from "../Typography";
import { ListStyle, TableHeaderStyle, TableStyle } from "./ListStyles";
import { Variant } from "./list.standard.js";

/*
 * List component. When variant is TABLE, columns must be provided.
 * This is how it should be used:
 * <List variant={Variant.TABLE} columns={["Column 1", "Column 2", "Column 3"]}>
 *  <tr>
 *    <td>
 *      <p>Hi</p>
 *    </td>
 *    <td>
 *      <p>Hi</p>
 *    </td>
 *    <td>
 *      <p>Hi</p>
 *    </td>
 *  </tr>
 * </List>
 */

export const List = (props) => {
  if (props.variant === Variant.TILE) {
    const { children } = props;
    return <ListStyle>{children}</ListStyle>;
  } else {
    const { children, columns, widths, darkHeader } = props;
    return (
      <TableStyle>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <TableHeaderStyle
                key={index}
                width={widths[index]}
                darkHeader={darkHeader}
              >
                {darkHeader ? (
                  <Typography weight={TWeight.BOLD}>{column}</Typography>
                ) : (
                  <Typography variant={TVariant.S}>{column}</Typography>
                )}
              </TableHeaderStyle>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </TableStyle>
    );
  }
};