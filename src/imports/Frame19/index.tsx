function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start relative shrink-0 text-center w-full">
      <p className="font-['Host_Grotesk:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[52px] text-white tracking-[-1.04px] w-full">Choose how you want to grow.</p>
      <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal leading-[1.24] relative shrink-0 text-[20px] text-[rgba(255,255,255,0.9)] w-full">From creating high-quality ad creatives to becoming your complete creative growth partner, we help brands turn attention into measurable results.</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-white w-full">
      <p className="font-['Host_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[26px] text-center whitespace-nowrap">Creative Ads</p>
      <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[16px] w-[min-content]">Premium ad creatives built to capture attention and elevate your brand.</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col font-['Host_Grotesk:Medium',sans-serif] font-medium gap-[32px] items-start relative shrink-0 text-[18px] whitespace-nowrap">
      <p className="relative shrink-0 text-white">Includes:</p>
      <p className="relative shrink-0 text-[rgba(255,255,255,0.9)]">
        {`• Ad concepts & creative direction`}
        <br aria-hidden />
        {`• Script & storyboards`}
        <br aria-hidden />• Professional video production
        <br aria-hidden />• Cinematic edited ads
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[20px]">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[140px] items-start leading-[1.24] pb-[10px] pl-[32px] pr-[10px] pt-[32px] relative size-full">
          <Frame7 />
          <Frame8 />
        </div>
      </div>
      <div aria-hidden className="absolute border-2 border-[#5b5b5b] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-white w-full">
      <p className="font-['Host_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[26px] text-center whitespace-nowrap">Creative Growth Engine</p>
      <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[16px] w-[min-content]">Performance-driven ad creatives built to attract customers and drive growth.</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col font-['Host_Grotesk:Medium',sans-serif] font-medium gap-[32px] items-start relative shrink-0 text-[18px] whitespace-nowrap">
      <p className="relative shrink-0 text-white">Includes:</p>
      <p className="relative shrink-0 text-[rgba(255,255,255,0.9)]">
        • Creative strategy
        <br aria-hidden />• Multiple ad variations
        <br aria-hidden />• Conversion-focused creatives
        <br aria-hidden />• Ad performance analysis
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[20px]">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[140px] items-start leading-[1.24] pb-[10px] pl-[32px] pr-[10px] pt-[32px] relative size-full">
          <Frame9 />
          <Frame10 />
        </div>
      </div>
      <div aria-hidden className="absolute border-2 border-[#cffe00] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[1px_3px_4px_0px_rgba(207,254,0,0.3)]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-white w-full">
      <p className="font-['Host_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[26px] text-center whitespace-nowrap">Growth Partner</p>
      <p className="font-['Host_Grotesk:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[16px] w-[min-content]">A dedicated creative team helping your brand scale through consistent campaigns.</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col font-['Host_Grotesk:Medium',sans-serif] font-medium gap-[32px] items-start relative shrink-0 text-[18px] whitespace-nowrap">
      <p className="relative shrink-0 text-white">Includes:</p>
      <p className="relative shrink-0 text-[rgba(255,255,255,0.9)]">
        • Monthly creative planning
        <br aria-hidden />• Campaign concepts
        <br aria-hidden />• Regular content production
        <br aria-hidden />• Creative performance optimization
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[20px]">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[120px] items-start leading-[1.24] pb-[10px] pl-[32px] pr-[10px] pt-[32px] relative size-full">
          <Frame11 />
          <Frame12 />
        </div>
      </div>
      <div aria-hidden className="absolute border-2 border-[#5b5b5b] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[48px] h-[462px] items-start relative rounded-[15px] shrink-0 w-[1136px]">
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[108px] items-center px-[158px] relative size-full">
          <Frame3 />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[120px] pt-[124px] relative size-full">
      <Frame />
    </div>
  );
}