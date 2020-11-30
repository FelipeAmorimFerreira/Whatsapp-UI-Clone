import React from "react";
import {
  Svg
} from "./styles"

const Icon = props => {

  const paths = {
    chat: {
      fill: ["currentColor"],
      d: [`M19.005 3.175H4.674C3.642 3.175
        3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 
        2.064-1.06 
        2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 
        9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z`]
    },
    dots: {
      fill: ["currentColor"],
      d: [`M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 
      0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 
      0 0 0 12 15z`]
    },
    stories: {
      fill: ["currentColor"],
      d: [`M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 
      1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 
      1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 
      0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 
      1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 
      1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 
      9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 
      7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z`]
    },
    notification: {
      viewBox: "0 0 48 48",
      fill: ["currentColor"],
      d: [`M24.154 2C11.919 2 2 11.924 2 24.165S11.919 46.33 24.154 
      46.33s22.154-9.924 22.154-22.165S36.389 2 24.154 2zm-.744 15.428v-.618c0-.706.618-1.324 
      1.324-1.324s1.323.618 1.323 1.324v.618c2.559.618 4.412 2.823 4.412 
      5.559v3.176l-8.294-8.294a5.056 5.056 0 0 1 1.235-.441zm1.323 15.706a1.77 1.77 
      0 0 1-1.765-1.765h3.529a1.768 1.768 0 0 
      1-1.764 1.765zm7.236-.883l-1.765-1.765H17.233v-.882l1.765-1.765v-4.853a5.56 
      5.56 0 0 1 .794-2.912l-2.559-2.559 1.147-1.147 14.735 14.736-1.146 1.147z`]
    },
    notConnected: {
      viewBox: "0 0 48 48",
      fill: ["currentColor", "#FFBC00"],
      d: [`M24.154 2C11.919 2 2 11.924 2 24.165S11.919 46.33 24.154 
      46.33s22.154-9.924 22.154-22.165S36.389 2 24.154 2z`, `M19.352 
      30.776c.809-.008 1.626 0 2.443 0 .008-2.05.008-4.109 
      0-6.159h-2.451c-.008 2.05-.016 4.108.008 6.159zm-3.476-8.674l1.928-1.928 
      1.929 1.928.964-.964-1.929-1.929 1.929-1.928-.964-.964-1.929 
      1.928-1.928-1.928-.965.964 1.929 1.928-1.929 1.929.965.964zm-.241 
      4.998a280.3 280.3 0 0 1 0 3.668c.825.016 1.642 0 2.467.008.008-1.233 
      0-2.459 0-3.692-.825 0-1.65-.032-2.467.016zm14.785-9.868c0 4.517-.008 
      9.026 0 13.544.825-.008 1.642.008 2.467-.008-.008-4.509-.008-9.01 
      0-13.52-.817-.048-1.642-.008-2.467-.016zm-3.7 2.899c.008 3.548-.008 
      7.096.008 10.644.817 0 1.634-.008 2.443 0 .032-3.684 
      0-7.377.016-11.061-.809-.056-1.626 0-2.435-.032a2.768 
      2.768 0 0 0-.032.449zm-3.668 2.019c-.024.152-.024.312-.024.464.008 
      2.723-.008 5.438.008 8.161h2.451c.016-.961 
      0-1.914.008-2.875-.016-1.914.024-3.836-.016-5.751a115.5 115.5 
      0 0 1-2.427.001z`]
    },
    search: {
      fill: ["currentColor"],
      d: [`M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 
      1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 
      0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 
      0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z`]
    },
    back: {
      fill: ["currentColor"],
      d: [`M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z`]
    },
    camera: {
      fill: ["currentColor"],
      d: [`M21.317 4.381H10.971L9.078 2.45c-.246-.251-.736-.457-1.089-.457H4.905c-.352 
      0-.837.211-1.078.468L1.201 5.272C.96 5.529.763 6.028.763 6.38v1.878l-.002.01v11.189a1.92 
      1.92 0 0 0 1.921 1.921h18.634a1.92 1.92 0 0 0 1.921-1.921V6.302a1.92 
      1.92 0 0 0-1.92-1.921zM12.076 18.51a5.577 5.577 0 1 1 0-11.154 5.577 5.577 0 
      0 1 0 11.154zm0-9.506a3.929 3.929 0 1 0 0 7.858 3.929 3.929 0 0 0 0-7.858z`]
    },
    pen: {
      fill: ["currentColor"],
      d: [`M3.95 16.7v3.4h3.4l9.8-9.9-3.4-3.4-9.8 9.9zm15.8-9.1c.4-.4.4-.9 
      0-1.3l-2.1-2.1c-.4-.4-.9-.4-1.3 0l-1.6 1.6 3.4 3.4 1.6-1.6z`]
    },
    confirm: {
      fill: ["currentColor"],
      d: [`M9 17.2l-4-4-1.4 1.3L9 19.9 20.4 8.5 19 7.1 9 17.2z`]
    },
    emote: {
      viewBox: "0 0 20 20",
      fill: ["currentColor"],
      d: [`M9.5 1.7C4.8 1.7 1 5.5 1 10.2s3.8 8.5 8.5 8.5 8.5-3.8 
      8.5-8.5-3.8-8.5-8.5-8.5zm0 15.9c-4.1 0-7.4-3.3-7.4-7.4s3.3-7.4 
      7.4-7.4 7.4 3.3 7.4 7.4-3.3 7.4-7.4 7.4z`, `M6.8 9.8c.7-.1
      1.2-.7 1.1-1.4-.1-.6-.5-1.1-1.1-1.1-.7 0-1.2.7-1.1 1.4 0 .6.5
      1 1.1 1.1zM13.9 11.6c-1.4.2-2.9.3-4.4.4-1.5 0-2.9-.1-4.4-.4-.2 
      0-.4.1-.4.3v.2c.9 1.8 2.7 2.9 4.7 3 2-.1 3.8-1.2 
      4.8-3 .1-.2 0-.4-.1-.5h-.2zm-4.1 2c-2.3 0-3.5-.8-3.7-1.4 
      2.3.4 4.6.4 6.9 0 0 .1-.4 1.4-3.2 1.4zM12.2 9.8c.7-.1 
      1.2-.7 1.1-1.4-.1-.6-.5-1.1-1.1-1.1-.7 0-1.2.7-1.1 
      1.4.1.6.5 1 1.1 1.1z`]
    }
  }

  return (
    <span style={{
      display: "inline-block",
      height: `${props.height || '24'}px`}}
    >
      <Svg
        viewBox={`${ paths[props.name].viewBox || "0 0 24 24"}`}
        height={props.height || "24"}
      >
        {paths[props.name].d.map((path, index) => {
          return <path
                    key={path}
                    fill={props.color || paths[props.name].fill[index]}
                    d={path}>
                 </path>
        })}
      </Svg>
    </span>
  )
};

export default Icon;
