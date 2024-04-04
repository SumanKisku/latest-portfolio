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
        className="absolute z-10 right-3 top-8 md:hidden"
        onClick={() => toggleDrawer()}
      >
        <MenuIcon className="h-8 w-8" />
      </button>
      <Drawer open={state} onClose={() => toggleDrawer()}>
        <List className="bg-black text-white h-full">
          <ListItem>
            <ListItemButton>
              <a
                className="flex flex-row items-center"
                href="https://github.com/SumanKisku"
                target="_blank"
              >
                <GitHubIcon className="h-7 w-7 fill-white mr-1" />
                Github
              </a>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <a
                className="flex flex-row items-center"
                href="https://rxresu.me/sumankisku1/sumankisku-resume"
                target="_blank"
              >
                <DownloadForOfflineIcon className="h-7 w-7 fill-white" />
                Resume
              </a>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
