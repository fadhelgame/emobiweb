"use client";

type Props = { saving: boolean; saved: boolean; onSave: () => void };

export default function SectionSaveBar({ saving, saved, onSave }: Props) {
  return (
    <div className="flex items-center gap-3">
      {saved && <span className="text-sm text-[#7DC816] font-medium">✓ Tersimpan</span>}
      <button
        onClick={onSave}
        disabled={saving}
        className="bg-[#7DC816] text-[#090B4F] font-bold px-5 py-2 rounded-xl hover:bg-[#96e01a] transition-colors disabled:opacity-60 text-sm"
      >
        {saving ? "Menyimpan..." : "Simpan"}
      </button>
    </div>
  );
}
