import React from "react";

export function Items({ items, twoCols, hideDescription }: any) {
  return (
    <div className="items">
      {items.map(
        ({ name, dietaryRestrictions, description, variations }: any) => (
          <div
            style={{
              paddingBottom: "0.25rem",
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
              <h2 style={{ marginRight: "0.5rem" }}>{name}</h2>
              <h4>{dietaryRestrictions}</h4>
            </div>
            <h2>{variations}</h2>
            {!hideDescription && <h4>{description}</h4>}
          </div>
        )
      )}
    </div>
  );
}
