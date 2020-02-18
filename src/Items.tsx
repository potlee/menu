import React from "react";

export function Items({ items, twoCols, hideDescription, style }: any) {
  return (
    <div className="items" style={style}>
      {items.map(
        ({ name, dietaryRestrictions, description, variations }: any) => (
          <div
            style={{
              paddingBottom: "0.5rem",
              flexBasis: twoCols ? "50%" : "100%",
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              minWidth: 240
            }}
          >
            <div
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                flexWrap: "wrap",
                alignItems: "baseline"
              }}
            >
              <h3 style={{ marginRight: "0.5rem" }}>{name}</h3>
              <h4>{dietaryRestrictions}</h4>
            </div>
            <h3>{variations}</h3>
            {!hideDescription && <h4>{description}</h4>}
          </div>
        )
      )}
    </div>
  );
}
