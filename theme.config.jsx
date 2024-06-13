import { Badge } from "./components/ui/badge";

const config = {
  logo: () => {
    return (
      <div className="flex items-center">
        <div className="flex items-center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 192 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M143.629 6.09454e-07C140.676 23.6779 120.478 42 96 42C71.5223 42 51.324 23.6779 48.3714 0C48.1263 1.96557 48 3.96804 48 6C48 32.5097 69.4903 54 96 54C122.51 54 144 32.5097 144 6C144 3.96804 143.874 1.96557 143.629 6.09454e-07Z"
              fill="#FF00F5"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M95.6286 54C92.676 77.6779 72.4777 96 48 96C23.5223 96 3.32395 77.6779 0.371363 54C0.12626 55.9656 0 57.968 0 60C0 86.5097 21.4903 108 48 108C74.5097 108 96 86.5097 96 60C96 57.968 95.8737 55.9656 95.6286 54Z"
              fill="#FF00F5"
              fillOpacity="0.941176"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M191.629 54C188.676 77.6779 168.478 96 144 96C119.522 96 99.324 77.6779 96.3714 54C96.1263 55.9656 96 57.968 96 60C96 86.5097 117.49 108 144 108C170.51 108 192 86.5097 192 60C192 57.968 191.874 55.9656 191.629 54Z"
              fill="#FF00F5"
            />
          </svg>
          <span
            style={{
              fontWeight: 800,
              color: "#FF00F5",
            }}
            className="flex items-center text-2xl ml-4"
          >
            <p className="mr-6">Rehook</p>
            <Badge className="bg-orange-600 text-orange-50">Alpha</Badge>
          </span>
          <pre></pre>
          <p className="text-center absolute right-64">🇵🇸</p>
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
            <Badge className=" absolute -right-[0.5em] bg-transparent border-lime-400 text-lime-500 px-[0.5em] hover:bg-transparent">
              New
            </Badge>
          )}
          {title === "useFetch" && (
            <Badge className=" absolute -right-[0.5em] bg-transparent border-pink-500 text-pink-500 px-[0.5em] hover:bg-transparent">
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
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://github.com/alamenai/rehook" target="_blank">
          Rehook
        </a>
        .
      </span>
    ),
  },
  banner: {
    key: "2.0-release",
    text: (
      <a href="https://github.com/alamenai/rehook" target="_blank">
        🔨 Rehook is still under development and it may have frequent break
        changes 🔨
      </a>
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
