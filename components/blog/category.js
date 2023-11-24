import Link from "next/link";
import Label from "@/components/ui/label";

export default function CategoryLabel({
  categories,
  nomargin = false
}) {
  return (
    <div className=" block gap-3 text-saffron items-center justify-center px-2 py-2">
      {categories?.length &&
        categories.slice(0).map((category, index) => (
          <Link
            href={`/category/${category.slug.current}`}
            // href={`/category/${category.slug.current}`}
            key={index}>
            <Label nomargin={nomargin} color={"saffron"}>
              {category.title}
            </Label>
          </Link>
        ))}
    </div>
  );
}
