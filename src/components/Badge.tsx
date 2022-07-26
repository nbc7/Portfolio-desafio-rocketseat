export function Badge(props: { text: string; icon: React.ReactNode }) {
  return (
    <div className="group">
      {/* <div className="invisible hover:visible h-6 w-[86px] bg-lightpurple-100 rounded-[30px] uppercase text-black font-bold text-[10px] leading-[13px] text-center pt-[6px]"> */}
      <div className="invisible group-hover:visible absolute -ml-[17px] -mt-7 h-6 w-[86px] bg-lightpurple-100 rounded-[30px] text-black font-bold text-[10px] leading-[13px] text-center pt-[6px]">
        {props.text}
      </div>
      {props.icon}
    </div>
  );
}
