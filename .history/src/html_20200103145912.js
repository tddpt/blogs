import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
        dangerouslySetInnerHTML={{
          __html: `
          const switchTumblerHandler = () => {
            const wrapper = document.querySelector(".tumbler__wrapper");
          
            wrapper.addEventListener("click", () => {
              toggleNightMode();
            });
          };
          
          const toggleNightMode = () => {
            document.body.classList.toggle("body--night-mode");
            document.querySelector(".tumbler").classList.toggle("tumbler--night-mode");
            document.querySelectorAll(".post").forEach(post => {
              post.classList.toggle("post--night-mode");
            });
          };
          
          switchTumblerHandler();
          
          `
        }}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
