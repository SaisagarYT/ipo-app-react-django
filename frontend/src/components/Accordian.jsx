import React from 'react';

const Accordian = (props) => {
  return (
    <div
      className="w-full pb-14 bg-white rounded-[8px] cursor-pointer transition-all duration-300 max-sm:pb-3"
      onClick={props.onToggle}
    >
      <section className="w-full flex justify-between px-6 pt-8">
        <h1 className="text-[30px] font-medium max-sm:text-[20px]">{props.name}</h1>
        <p className="text-[30px] font-bold text-blue-500">
          {props.isOpen ? '-' : '+'}
        </p>
      </section>

      {props.isOpen && (
        <div className="w-full bg-white px-6 pb-6 pt-4">
          {Array.isArray(props.desc) ? (
            props.desc.map((item, i) => (
              <li className="font-medium list-disc ml-6" key={i}>
                {item}
              </li>
            ))
          ) : (
            <p className="font-medium">{props.desc}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Accordian;
