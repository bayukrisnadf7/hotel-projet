import Link from "next/link";


const MenuSidebar = (props) => {
  const { link, icons, title } = props;
  return (
    <Link href={link}>
      <div className="flex justify-between items-center p-3 hover:bg-color-primary hover:text-white">
        <p className="">{title}</p>
        {icons}
      </div>
    </Link>
  );
};
export default MenuSidebar;
