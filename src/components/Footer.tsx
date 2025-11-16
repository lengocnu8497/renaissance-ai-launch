export const Footer = () => {
  return <footer className="bg-zinc-800 bg-secondary text-secondary-foreground py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold mb-2 text-gray-100">Renaissance</h3>
            <p className="text-gray-300">Your personal cosmetic concierge</p>
          </div>
          
          <div className="text-center md:text-right text-sm text-secondary-foreground/70">
            <p className="text-gray-100">© 2024 Renaissance. All rights reserved.</p>
            <p className="mt-2 text-gray-100">Launching soon</p>
          </div>
        </div>
      </div>
    </footer>;
};