export abstract class BaseClass
{
    protected static maxLength = new Map();

    protected static displayedColumn: string[];

    public static GetMaxLength(property: string): number
    {
        return this.GetMaxLengthGeneric(this.maxLength, property);
    }

    private static GetMaxLengthGeneric(value: any, property: string): number
    {
        switch (true)
        {
            case value.has(property) : return value.get(property);
            default : return -1;
        }
    }

    public static GetDisplayedColumns(): string[]
    {
        return this.displayedColumn;
    }
}
