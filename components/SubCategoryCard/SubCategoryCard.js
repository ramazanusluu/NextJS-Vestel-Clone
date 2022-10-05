import React from "react";
import Link from "next/link";
import Image from "next/image";

function SubCategoryCard({ item }) {
  return (
    <>
      <div className="col-sm-6 col-lg-4 col-xl-3">
        <Link href={`products/${item.ID}`}>
          <a>
            <div className="card subCategory-card mt-5">
              <div className="card-head subCategory-card-head">
                <Image
                  src={!item.ImageUri ? "/images/dummy.jpg" : item.ImageUri}
                  alt={item.DisplayName}
                  width={500}
                  height={500}
                  title={item.DisplayName}
                />
              </div>
            </div>
            <div className="card-text card-title my-3 text-center">
              {item.DisplayName}
            </div>
          </a>
        </Link>
      </div>
    </>
  );
}

export default SubCategoryCard;
