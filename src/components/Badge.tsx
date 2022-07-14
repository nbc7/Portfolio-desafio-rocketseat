export function Badge(props: { text: string }) {
  return (
    <div className="h-6 w-[86px] bg-lightpurple-100 rounded-[30px] uppercase text-black font-bold text-[10px] leading-[13px] text-center pt-[6px]">
      {props.text}
    </div>
  );
}
