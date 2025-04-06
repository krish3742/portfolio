function Footer() {
  return (
    <footer className="border-t border-gray-400 bg-[#030014]">
      <div className="container mx-auto px-4 pb-4">
        <hr className="opacity-15 border-white mb-4" />
        <p className="text-sm text-gray-500 text-center dark:text-gray-400 mt-2">
          Designed and built by{" "}
          <span className="text-purple-500 font-medium">Kshitij Agrawal</span>{" "}
          with <span className="text-purple-500 font-medium">Love</span> &{" "}
          <span className="text-purple-500 font-medium">Coffee</span>
        </p>
        <p className="text-sm text-gray-500 pt-2 text-center dark:text-gray-400">
          © 2024 KA. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
