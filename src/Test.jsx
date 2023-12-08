import { motion } from "framer-motion";
import { useState } from "react";

const Test = () => {
  const [open, setOpen] = useState(false);

  //todo : khi có quá nhiều thứ phức tạp ở trong animation thì sử dụng variant
  const variant = {
    visible: {
      opacity: 1,
      x: 800,
      transition: { type: "spring", stifness: 100, damping: 100 },
    },
    hidden: { opacity: 0 },
  };

  const items = ["item1", "item2", "item3", "item4"];
  //todo : làm animation có nhiều items
  const variantsUl = {
    visible: {
      opacity: 1,
      x: 100,
      //   todo : staggerChildren : làm xuất hiện từng items theo thời gian
      transition: { staggerChildren: 1 },
    },
    hidden: { opacity: 0 },
  };
  //todo : custom
  const variantsCustom = {
    visible: (i) => ({
      opacity: 1,
      x: 100,
      transition: { delay: i * 0.3 },
      hidden: { opacity: 0 },
    }),
  };

  return (
    <div className="course">
      {/* animate in box */}
      {/* <motion.div
        className="box"
        // initial={{ opacity: 0.5, scale: 0.5 }}
        // // animate={{ opacity: 1, scale: 1, x: 200, y: 500 }}
        // transition={{ duration: 2 }}
        // // whileHover={{ opacity: 1, scale: 2 }}
        // // todo: click vào sẽ thay đổi
        // // whileTap={{ opacity: 1, scale: 2 }}
        // // todo : inview : có thể thấy item ở trong viewport
        // whileInView={{ opacity: 1, scale: 2 }}
        // //todo : drag kéo thả
        // drag
        //todo : thay thế variant vô đây
        variants={variant}
        // initial="hidden"
        // animate="visible"
        transition={{ duration: 2 }}
        animate={open ? "visible" : "hidden"}
      ></motion.div>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        Click here
      </button> */}

      {/* làm animation có nhiều items */}
      <motion.ul variants={variantsUl} initial="hidden" animate="visible">
        {items.map((item) => (
          <motion.li variants={variantsUl} key={item}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
      {/* custom animation */}
      <div style={{ marginLeft: " 50px" }}>
        <motion.ul variants={variantsCustom} initial="hidden" animate="visible">
          {items.map((item, i) => (
            //todo : truyền vô custom = tham số dc truyền vào
            <motion.li variants={variantsCustom} key={item} custom={i}>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Test;
