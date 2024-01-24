export interface HeadCell {
  id: string;
  label: string;
  sortable: boolean;
  filterable: boolean;
}

export const tableHeads = [
  {
    name: "image",
    label: "Image",
    sortable: false,
    filterable: false,
  },
  {
    name: "name",
    label: "Name",
    sortable: true,
    filterable: false,
  },
  {
    name: "origin",
    label: "Origin",
    sortable: true,
    filterable: false,
  },
  {
    name: "status",
    label: "Status",
    sortable: true,
    filterable: true,
  },
  {
    name: "species",
    label: "Species",
    sortable: true,
    filterable: false,
  },
  {
    name: "gender",
    label: "Gender",
    sortable: true,
    filterable: true,
  }
];