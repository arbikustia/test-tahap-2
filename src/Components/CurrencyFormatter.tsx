
type formatterProps = {
    amount: number | undefined
    type: string
}


const CurrencyFormatter = ({ amount, type }:formatterProps) => {
    // Function to format currency to IDR
    const formatIDR = (amount:number) => {
        // Check if amount is not empty
        if (amount) {
            // Convert amount to string
            const strAmount = amount.toString();
            // Split the amount into two parts: before and after the decimal point
            const parts = strAmount.split('.');
            // Format the first part (before the decimal point) with comma separator every 3 digits
            const formattedBeforeDecimal = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            // Combine the formatted parts with comma and add IDR symbol
            if (type == 'idr') {
                return `Rp ${formattedBeforeDecimal}`;

            } else if (type == 'cny') {

                return `¥ ${formattedBeforeDecimal}`;
            }
        }
        // Return empty string if amount is empty
        return '';
    };

    return <span>{formatIDR(amount)}</span>;
};

export default CurrencyFormatter;
