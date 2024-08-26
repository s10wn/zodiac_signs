/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import React from "react";

declare module "react" {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: ForwardedRef<T>) => ReactElement | null
  ): (props: P & RefAttributes<T>) => ReactElement | null;
}
