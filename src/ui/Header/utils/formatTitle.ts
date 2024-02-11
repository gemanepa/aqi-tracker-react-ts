function formatTitle(title: string) {
  const splittedTitle = title.split(" ");
  const firstRow = splittedTitle[0] + " " + splittedTitle[1];
  const secondRow = splittedTitle[2];
  return { firstRow, secondRow };
}

export default formatTitle;
