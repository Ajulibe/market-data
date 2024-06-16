import Button from "@/components/ui/button";

export function createHeader(column: any, label: string) {
  return (
    <Button
      variant="primary"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {label}
    </Button>
  );
}
