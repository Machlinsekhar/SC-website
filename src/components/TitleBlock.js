import React from "react";

function TitleBlock(props) {
  const { title, subtitle } = props;

  return (
    <div>
      <p className="text-3xl font-semibold text-[#AA4EC3] mt-10 text-left ml-5 md:max-w-[1300px] md:mx-auto">
        {title}
      </p>

      <p className="text-lg font-medium  text-left ml-5 mr-5 md:max-w-[1300px] md:mx-auto">
        {subtitle}
      </p>
    </div>
  );
}

export default TitleBlock;
