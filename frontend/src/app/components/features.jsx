
export const Features = ()=> {
    return (
        <div>
            <section className="bg-gray-50 py-16">
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center px-6">
                <div>
                    <div className="text-5xl text-orange-500 mb-3">📝</div>
                    <h3 className="font-semibold mb-2">Fast checking</h3>
                    <p className="text-sm text-gray-600">Forms are scanned for HTTPS to ensure secure submission.</p>
                </div>
                <div>
                    <div className="text-5xl text-orange-500 mb-3">💾</div>
                    <h3 className="font-semibold mb-2">High precision</h3>
                    <p className="text-sm text-gray-600">Sensitive fields like passwords or IDs are flagged before you type.</p>
                </div>
                <div>
                    <div className="text-5xl text-orange-500 mb-3">🔒</div>
                    <h3 className="font-semibold mb-2">Private & Secure</h3>
                    <p className="text-sm text-gray-600">Get instant warnings when a form could put your data at risk.</p>
                </div>
                </div>
            </section>
        </div>
    )
}