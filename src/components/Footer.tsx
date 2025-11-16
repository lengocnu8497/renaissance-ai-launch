export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold mb-2">Renaissance</h3>
            <p className="text-secondary-foreground/80">
              Your AI-powered cosmetic concierge
            </p>
          </div>
          
          <div className="text-center md:text-right text-sm text-secondary-foreground/70">
            <p>© 2024 Renaissance. All rights reserved.</p>
            <p className="mt-2">Launching soon</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
