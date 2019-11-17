import React from "react";

export function Items({ items, twoCols }: any) {
  return (
    <div style={{ flexWrap: "wrap", flexDirection: "row" }}>
      {items.map(
        ({ name, dietaryRestrictions, description, variations }: any) => (
          <div
            style={{
              paddingTop: "8px",
              flexBasis: twoCols ? "50%" : "100%",
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start"
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
              <h2 style={{ marginRight: 9 }}>{name}</h2>
              <h4>{dietaryRestrictions}</h4>
            </div>
            <h2>{variations}</h2>
            <h4>{description}</h4>
          </div>
        )
      )}
    </div>
  );
}
