import React, {useState} from "react";


const NavbarForMainForm = ({ mainFormName, activeForm, setActiveForm }) => {
  const [hoveredForm, setHoveredForm] = useState(null);

  // 找到當前表單的索引
  const currentIndex = mainFormName.indexOf(activeForm);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setActiveForm(mainFormName[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < mainFormName.length - 1) {
      setActiveForm(mainFormName[currentIndex + 1]);
    }
  };

  return (
    <div className="navBar">
 {/* 上一頁按鈕 */}
 <button onClick={handlePrevious} disabled={currentIndex === 0}>
        上一頁
      </button>

      {/* 分頁按鈕 (顯示數字和懸浮提示) */}
      {mainFormName.map((name, index) => (
        <button
          key={name}
          className={name === activeForm ? "active" : ""}
          onClick={() => setActiveForm(name)}
          title={name} 
        >
          {index + 1}
        </button>
      ))}

      {/* 下一頁按鈕 */}
      <button
        onClick={handleNext}
        disabled={currentIndex === mainFormName.length - 1}
      >
        下一頁
      </button>
    </div>
  );
};

export default NavbarForMainForm;
