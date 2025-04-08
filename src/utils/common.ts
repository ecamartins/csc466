export enum AppPageType {
  HOME,
  LOGS,
  PROPOSAL,
  BIWEEKLY1,
  MIDTERM,
  BIWEEKLY3,
  PRESENTATION,
}

export function makePath(p: AppPageType): string {
  switch (p) {
    case AppPageType.HOME:
      return "/";

    case AppPageType.PROPOSAL:
      return "/proposal";

    case AppPageType.BIWEEKLY1:
      return "/bw1";

    case AppPageType.MIDTERM:
      return "/midterm-update";

    case AppPageType.BIWEEKLY3:
      return "/bw3";

    case AppPageType.PRESENTATION:
      return "/presentation";

    default:
      throw new Error(`unhandled path enum ${p}`);
  }
}

interface LogEntries {
  [date: string]: { title: string; content: string };
}

export const logs: LogEntries = {
  "Jan. 5, 2025": {
    title: "Log Title 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt purus ut sagittis iaculis. Duis sagittis consectetur pellentesque. Etiam malesuada tortor mauris, vel imperdiet tortor consequat eget. Morbi eu orci in neque hendrerit facilisis. Aliquam erat volutpat. Nam vel enim ante. Suspendisse quis nulla ultricies, varius erat nec, convallis leo. Praesent vel auctor ante, hendrerit viverra felis. Maecenas blandit, lectus vitae tincidunt ullamcorper, ex leo feugiat felis, non ultricies orci tellus ac orci. Fusce id sagittis quam. Vestibulum diam sapien, tristique a laoreet vitae, volutpat sed nisl. Aliquam rhoncus nunc quis turpis aliquam maximus.Donec facilisis leo at turpis lobortis venenatis.Morbi malesuada convallis metus eget porta.Integer finibus lorem sem, ut placerat eros tempus quis.Morbi vitae auctor mi, ut commodo urna.Nunc rhoncus felis vel orci lacinia, id venenatis dui porta.Curabitur sagittis arcu auctor auctor bibendum.Vestibulum commodo laoreet feugiat.Maecenas viverra dignissim risus, non pretium leo euismod vitae.Duis at pellentesque justo.Sed fermentum tincidunt maximus. Sed et condimentum lorem.Nunc in gravida dui, vel dictum metus.Vivamus non ultrices odio.Sed mollis, nisi non semper lobortis, lorem libero volutpat dui, id eleifend diam nulla non ante.Suspendisse id purus feugiat, bibendum orci sit amet, dapibus ex.Donec at hendrerit arcu.Curabitur semper condimentum hendrerit.Duis volutpat nibh ut dolor sodales varius.Proin viverra, felis vitae consectetur ullamcorper, tellus libero molestie risus, vitae lobortis tortor velit ac magna.",
  },
  "Jan. 6, 2025": { title: "Log Title 2", content: "Log entry 2." },
};
