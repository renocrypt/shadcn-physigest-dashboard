"use client";
export default function UserItem() {
  return (
    <div className="flex items-center justify-center gap-2 border rounded-[12px] py-2 px-4">
      <div
        className="avatar rounded-full h-12 w-12 bg-emerald-500 text-white font-[700] 
      flex items-center justify-center"
      >
        <p>AC</p>
      </div>
      <div>
        <p className="text-[17px] font-bold">AppCubic</p>
        <p className="text-[13px] text-neutral-400">dev@appcubic.com</p>
      </div>
    </div>
  );
}
