import { ChevronRight } from "lucide-react";
import { Badge } from "./components/ui/badge";
import { ThemeSwitch, LocaleSwitch } from "nextra-theme-docs";

const config = {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Rehook" />
      <meta
        property="og:description"
        content="Eliminate the need to repeatedly implement the same hooks across different projects."
      />
    </>
  ),

  navbar: {
    extraContent: (
      <>
        <LocaleSwitch />
        <ThemeSwitch />
      </>
    ),
  },

  logo: () => {
    return (
      <div className="flex items-center">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(244 63 94)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-fish"
          >
            <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />
            <path d="M18 12v.5" />
            <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
            <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" />
            <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
            <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" />
          </svg>
          <span
            style={{
              fontWeight: 800,
            }}
            className="flex items-center text-2xl ml-4 text-rose-500"
          >
            <p className="mr-6">Rehook</p>
            <Badge className="bg-rose-100 border-rose-500 text-rose-600 px-[0.5em] hover:bg-transparent">
              BETA
            </Badge>
          </span>
        </div>
      </div>
    );
  },

  project: {
    link: "https://github.com/alamenai/rehook",
  },

  chat: {
    link: "https://x.com/AlaMenai",
    icon: (
      <svg width="24" height="24" viewBox="0 0 248 204">
        <path
          fill="currentColor"
          d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z"
        />
      </svg>
    ),
  },

  sidebar: {
    titleComponent({ title, type }) {
      return (
        <div className="flex items-center justify-between relative w-full">
          <div>{title}</div>
          {(title === "useLoading" ||
            title === "useBattery" ||
            title === "useUrl" ||
            title === "useEnv" ||
            title === "useMouse" ||
            title === "useUnsavedFormChanges" ||
            title === "useCookie" ||
            title === "useSession" ||
            title === "useMediaQuery") && (
            <Badge className=" absolute -right-[0.5em] bg-transparent border-rose-500 text-rose-500 px-[0.5em] hover:bg-transparent">
              New
            </Badge>
          )}
          {title === "useFetch" && (
            <Badge className=" absolute -right-[0.5em] bg-transparent border-blue-500 text-blue-500 px-[0.5em] hover:bg-transparent">
              Updated
            </Badge>
          )}
        </div>
      );
    },
  },

  footer: {
    text: (
      <span>
        Built by{" "}
        <a href="https://github.com/alamenai" target="_blank">
          <b>
            <u>Ala Menai.</u>
          </b>
        </a>{" "}
        The source code is availabe on{" "}
        <a href="https://github.com/alamenai/rehook" target="_blank">
          <b>
            <u>GitHub.</u>
          </b>
        </a>
      </span>
    ),
  },

  banner: {
    key: "2.0-release",
    dismissible: false,
    text: (
      <div className="bg-rose-600 absolute right-0 left-0 top-0 bottom-0 flex justify-center items-center">
        <a href="https://github.com/alamenai/rehook" target="_blank">
          <span className="mr-4">🎉</span> Rehook 1.0.0 beta is out with 16
          custom hooks.
          <span className="ml-4">🎉</span>
        </a>
      </div>
    ),
  },

  feedback: {
    useLink: () => {
      return "https://github.com/alamenai/rehook/issues/new";
    },
  },

  editLink: {
    component: (url) => {
      console.log(url);
      return (
        <a
          href={`https://github.com/alamenai/rehook-website/edit/main/${url.filePath}`}
        >
          Edit this page
        </a>
      );
    },
  },

  useNextSeoProps() {
    return {
      titleTemplate: "%s | Rehook",
    };
  },
};

export default config;
