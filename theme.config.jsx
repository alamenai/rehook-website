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
  sidebar: {
    titleComponent({ title, type }) {
      return (
        <div className="flex items-center justify-between relative w-full">
          <div>{title}</div>

          {title === "useLoading" && || title === "useBattery") && (

            <Badge className=" absolute -right-[0.5em] bg-transparent border-lime-400 text-lime-500 px-[0.5em] hover:bg-transparent">
              New
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
