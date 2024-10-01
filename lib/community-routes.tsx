export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

const communityRoutes: EachRoute[] = [
  {
    title: "Community",
    href: "/community",
  },
  { title: "Support", href: "/support" },
  { title: "Team", href: "/team" },
  { title: "Resources", href: "/resources" },
  { title: "Contributing", href: "/contributing" },
  { title: "Release Process", href: "/release-process" },
  { title: "FAQ", href: "/faq" },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute): Page[] {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export function getCommunityRoutes() {
  return communityRoutes;
}

export function getCommunityRoutesFlatten(): Page[] {
  return getCommunityRoutes().map((it) => getRecurrsiveAllLinks(it)).flat();
}

export function getCommunityPreviousNext(path: string) {
  path = path.split("/").slice(1).join("/");
  const routes = getCommunityRoutesFlatten();
  const index = routes.findIndex(({ href }) => href === `/${path}`);
  return {
    prev: routes[index - 1],
    next: routes[index + 1],
  };
}
