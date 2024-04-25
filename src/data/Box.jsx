import boximage from "../assets/box2.png"

export const Box = () => {
  return (
    <div className="w-[94px] h-[94px]">
      <img src={boximage} className="w-full h-full object-contain" alt="" />
    </div>
  );
};