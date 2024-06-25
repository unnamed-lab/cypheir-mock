export default function ModalBackdrop({ state }: { state?: boolean }) {
    return (
        state && (
            <div className="fixed left-0 top-0 h-full w-full bg-[#0000001f] backdrop-blur-sm"></div>
        )
    );
}
