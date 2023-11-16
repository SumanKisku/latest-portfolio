import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";

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
        <MenuIcon className="h-8 w-8 md:hidden" />
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
                  <GitHubIcon className="h-7 w-7 fill-white" />
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
                  <DownloadForOfflineIcon className="h-7 w-7 fill-white" />
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
