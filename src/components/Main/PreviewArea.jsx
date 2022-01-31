import "./PreviewArea.css";
import Avatar from "./PreviewArea/Avatar";
import Message from "./PreviewArea/Message";
import Username from "./PreviewArea/Username";

export default function PreviewArea() {
  return (
    <div className="preview-container">
      <div className="preview-wrapper">
        <Avatar />
        <div className="preview-content">
          <Username />
          <Message
            content={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem vitae aliquam a quod eius id facere dolorem cupiditate, recusandae maxime ab sunt quis velit cumque ut quaerat veritatis, dolore minus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem vitae aliquam a quod eius id facere dolorem cupiditate, recusandae maxime ab sunt quis velit cumque ut quaerat veritatis, dolore minus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem vitae aliquam a quod eius id facere dolorem cupiditate, recusandae maxime ab sunt quis velit cumque ut quaerat veritatis, dolore minus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem vitae aliquam a quod eius id facere dolorem cupiditate, recusandae maxime ab sunt quis velit cumque ut quaerat veritatis, dolore minus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem vitae aliquam a quod eius id facere dolorem cupiditate, recusandae maxime ab sunt quis velit cumque ut quaerat veritatis, dolore minus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem vitae aliquam a quod eius id facere dolorem cupiditate, recusandae maxime ab sunt quis velit cumque ut quaerat veritatis, dolore minus.recusandae maxime ab sunt quis velit cumque ut quaerat veritatis, dolore minus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem vitae aliquam a quod eius id facere dolorem cupiditate, recusandae maxime ab sunt quis velit cumque ut quaerat veritatis, dolore minus.recusandae maxime ab sunt quis velit cumque ut quaerat veritatis, dolore minus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem vitae aliquam a quod eius id facere dolorem cupiditate, recusandae maxime ab sunt quis velit cumque ut quaerat veritatis, dolore minus."
            }
          />
        </div>
      </div>
    </div>
  );
}
