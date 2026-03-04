import { useParams } from "react-router";

const specs = {
  1: [
    { label: "Display", value: '15.6" Retina Display' },
    { label: "Processor", value: "Intel Core i7" },
    { label: "RAM", value: "16GB DDR4" },
    { label: "Storage", value: "512GB SSD" },
    { label: "Battery", value: "10 hours" },
  ],
  2: [
    { label: "Driver Size", value: "40mm" },
    { label: "Frequency Response", value: "20Hz - 20kHz" },
    { label: "Battery Life", value: "30 hours" },
    { label: "Connectivity", value: "Bluetooth 5.0" },
    { label: "Weight", value: "250g" },
  ],
  3: [
    { label: "Size", value: "US 7-13" },
    { label: "Material", value: "Mesh Upper" },
    { label: "Sole", value: "Rubber Outsole" },
    { label: "Weight", value: "280g" },
    { label: "Drop", value: "8mm" },
  ],
  4: [
    { label: "Capacity", value: "12 cups" },
    { label: "Power", value: "1000W" },
    { label: "Features", value: "Programmable Timer" },
    { label: "Material", value: "Stainless Steel" },
    { label: "Warranty", value: "2 years" },
  ],
};

export function ProductSpecs() {
  const { productId } = useParams();
  const productSpecs = specs[productId] || [];

  return (
    <div>
      <h3>Specifications</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          {productSpecs.map((spec, index) => (
            <tr
              key={spec.label}
              style={{
                backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white",
              }}
            >
              <td
                style={{
                  padding: "12px",
                  fontWeight: "bold",
                  width: "200px",
                  borderBottom: "1px solid #eee",
                }}
              >
                {spec.label}
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid #eee",
                }}
              >
                {spec.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
