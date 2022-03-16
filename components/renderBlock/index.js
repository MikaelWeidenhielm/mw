import { Text } from "../text/text";
import s from "./block.module.css"

export const renderBlock = (block) => {
    const { type, id } = block;
    const value = block[type];
    switch (type) {
      case "table":
        return (
          <p>
            <Text text={value.rich_text} />
          </p>
      );
      case ("paragraph" || "heading_1 || heading_2"):
        //if the block is empty, render a linebreak
        if(value.rich_text.length <= 0) {
          return <br />
        }
        
        return (
          <p>
            <Text text={value.rich_text} />
          </p>
      );
      case "heading_1":
      case "heading_2":
        return (
          <h2 className={s.heading_lg}>
            <Text text={value.rich_text} />
          </h2>
      );
      case "heading_3":
        return (
          <h3 className={s.heading_sm}>
            <Text text={value.rich_text} />
          </h3>
      );
      case "bulleted_list_item":
      case "numbered_list_item":
        return (
          <li>
            <Text text={value.rich_text} />
          </li>
      );
      case "image":
        const src = value.type === "external" ? value.external.url : value.file.url;
        const caption = value.caption.length < 0 ? value.caption[0].plain_text : "";
        return (
          <figure>
            <img className="rounded" src={src} alt={caption} />
            {caption && <figcaption>{caption}</figcaption>}
          </figure>
      );
      case "bookmark":
      const url = value.url
        return (
          <figure>
            <img className="rounded" src={url} alt={"image"} />
          </figure>
        );
      default:
        return `❌ Unsupported block (${
          type === "unsupported" ? "unsupported by Notion API" : type
        })`;
    }
};