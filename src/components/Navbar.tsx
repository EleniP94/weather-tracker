/** @format */

import * as React from 'react';
import { CiSun } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { RiUserLocationLine } from "react-icons/ri";
import SearchBox from './SearchBox';

type Props = {};

// export interface IAppProps {
// }

// export default function Navbar (props: IAppProps) {
export default function Navbar({}: Props) {
  return (
    <nav className = "shadow-sm sticky top-0 left-0 z-50 bg-white">
        <div className = "h-[80px] w-full flex justify-between items-center max-w-7x1 px-3 mx-auto">
            <p className = "flex items-center justify-center gap-2 ">
                <h3 className = "text-gray-500 text-3x1"> Weather </h3>
                <CiSun className = "text-3xl mt-1 text-yellow-300"/>
            </p>
            {/*   */}
            <section className = "flex gap-2 items-center">
            <CiLocationOn className = "text-2x1 text-gray-400 hover:opacity-80 cursor-pointer"/>
            <RiUserLocationLine className = "text-3xl"/>
            <p className = "text-slate-900/80 text-sm"> Greece </p>
            <div>
                {/* SearchBox */}
                <SearchBox />    
            </div>

            </section>
        </div>
    </nav>
  );
}

