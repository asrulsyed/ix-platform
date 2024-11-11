// import SubMenu from "@/components/SubMenu"

const InvestingLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      {/* <SubMenu /> */}
      <main className="flex flex-col text-sm leading-6 min-h-[calc(100vh-281px)] items-center justify-center">
        {children}
      </main>
    </>
  )
}

export default InvestingLayout