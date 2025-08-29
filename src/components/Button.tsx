export default function Button({ text }: { text: string }) {
    return (
        <button className="bg-amber-100 hover:bg-amber-200 cursor-pointer py-2 px-4">
            {text}
        </button>
    );
}