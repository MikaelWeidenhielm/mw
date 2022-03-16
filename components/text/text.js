import styles from "./text.module.css"

export const Text = ({ text }) => {
    if (!text) {
      return null;
    }
    return text.map((value) => {
        const {
            annotations: { bold, code, color, italic, strikethrough, underline },
            text,
        } = value;
        
        return (
            <span
              key={text.content}
              className={[
                bold ? styles.bold : "",
                code ? styles.code : "",
                italic ? styles.italic : "",
                strikethrough ? styles.strikethrough : "",
                underline ? styles.underline : "",
              ].join(" ")}
              style={color !== "default" ? { color } : {}}
            >
              {text.link ? <a className="underline" href={text.link.url} rel="noreferrer" target="_blank">{text.content}</a> : text.content}
            </span>
          );
        });
};