

export const Installation = ()=> {
    return (
        <div>
            <section id="install" className="px-6 py-16 max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-6">Get Started in a few Easy Steps</h2>

                <ol className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 list-decimal list-inside text-left">
                    <li>Click the <strong>Add to Chrome</strong> button.</li>
                    <li>To manage your extensions, open <strong>chrome://extensions/</strong> in your browser.</li>

                    <li>FormGuardian should be installed at any moment</li>
                    <li>Activate developer mode (top corner on the right-hand side)</li>

                    <li>Extract it in the folder of your choice</li>
                    <li>Load your extensions by clicking on <strong>Load unpacked</strong></li>

                    <li>Go to manage extensions on your browser</li>
                    <li>Enjoy peace of mind when filling out forms.</li>
                </ol>

                <a
                    href="/formguardian.zip"
                    className="mt-8 inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-orange-600 transition"
                >
                    Add to Chrome
                </a>
                </section>


        </div>
    )
}