import ToggleSwitch from "../UI/toggleSwitch";

const Header = () => {
  return (
    <header className="border-b top-0 sticky z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-2">
        <nav className="flex items-center justify-between">
          <a href="/blog" className="router-link-active router-link-exact-active font-bold text-xl italic tracking-wide">
            <span>WEHE</span>
            <span className="text-gray-500">VO</span>
          </a>
          <ul className="flex items-center gap-5 font-semibold">
            <li>
              <a href="/blog/resume" className="py-3 block">Résumé</a>
            </li>
            <li>
              <a href="https://github.com/wehevo" rel="noopener noreferrer" target="_blank" className="py-3 block"> GitHub </a>
            </li>
            <li>
              {/* <ToggleSwitch /> */}
              <label className="relative inline-flex cursor-pointer items-center">
                <input id="switch" type="checkbox" className="peer sr-only" />
                <label className="hidden"></label>
                <div className="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
              </label>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;