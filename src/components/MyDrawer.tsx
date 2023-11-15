import { Bars3Icon } from "@heroicons/react/20/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function MyDrawer() {
  const [state, setState] = useState(false);

  const toggleDrawer = () => {
    console.log(state);
    setState(!state);
  };

  return (
    <>
      <button
        className="absolute z-10 right-3 top-8"
        onClick={() => toggleDrawer()}
      >
        <Bars3Icon className="h-8 w-8 md:hidden" color="#fff" />
      </button>
      <Drawer open={state} onClose={() => toggleDrawer()}>
        <List className="bg-black text-white h-full">
          <ListItem>
            <ListItemButton>
              <a
                className="flex flex-row items-center"
                href="https://github.com/SumanKisku"
              >
                <ListItemIcon>
                  <Image
                    src="/github.svg"
                    alt="Github logo svg"
                    className="w-5 h-5 ml-1"
                    width={10}
                    height={10}
                    priority
                  />
                </ListItemIcon>
                Github
              </a>
            </ListItemButton>
          </ListItem>
          {/* TODO: Upload resume on google drive */}
          {/* <ListItem>
            <ListItemButton>
              <a className="flex flex-row items-center" href="#">
                <ListItemIcon>
                  <ArrowDownTrayIcon
                    className="w-5 h-5 ml-1 stroke-[3px]"
                    color="#d9d9d9"
                  />
                </ListItemIcon>
                Resume
              </a>
            </ListItemButton>
          </ListItem> */}
        </List>
      </Drawer>
    </>
  );
}
