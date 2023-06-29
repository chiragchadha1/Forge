export const Button = ({children}: {children: string}) => {
  return (
      <button className="p-4 px-6 bg-forge-orange rounded-2xl text-white font-bold">{children}</button>
  )
}