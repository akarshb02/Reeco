import React from "react";

export default React.forwardRef(function Layout({ children }, ref) {
 return (
  <>
   <div ref={ref} className="p-auto">
    <main className="mx-auto">{children}</main>
   </div>
  </>
 );
});