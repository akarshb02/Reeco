export function ConfirmationModalContent({
  title,
  bottomContent,
  onDismiss,
  topContent,
}) {
  return (
    <div className="relative w-full">
      <div className="flex flex-row justify-between p-6 border-b border-zee-gray-v-400">
        <div>
          <p className="text-base font-bold text-zee-black">{title}</p>
        </div>
        <div onClick={onDismiss} className="cursor-pointer">
          X
        </div>
      </div>
      <div className="pt-4 bg-white-v-900 rounded-b-3xl">
        <div className="">
          <div>{topContent()}</div>
        </div>
        <div>{bottomContent()}</div>
      </div>
    </div>
  );
}