/**
 * Utility function to download a file from a URL
 * @param url - The URL of the file to download
 * @param filename - The desired filename for the downloaded file
 */
export const downloadFile = async (url: string, filename: string): Promise<void> => {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename;
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the object URL
    window.URL.revokeObjectURL(downloadUrl);
  } catch (error) {
    console.error('Error downloading file:', error);
    // Fallback: open in new tab if download fails
    window.open(url, '_blank');
  }
};

/**
 * Specific function to download the brochure PDF
 */
export const downloadBrochure = async (): Promise<void> => {
  const brochureUrl = 'https://koz5ylkurb.ufs.sh/f/VdVJXQsMkbnqx9QmmwklENdzMShcuIi8s7Qnr16wafHqk5eG';
  await downloadFile(brochureUrl, 'Pristiq-Brochure.pdf');
};

/**
 * Download function for Opulence Heights specific brochure
 */
export const downloadOpulenceHeightsBrochure = async (): Promise<void> => {
  const brochureUrl = 'https://koz5ylkurb.ufs.sh/f/VdVJXQsMkbnqx9QmmwklENdzMShcuIi8s7Qnr16wafHqk5eG';
  await downloadFile(brochureUrl, 'Opulence-Heights-Brochure.pdf');
};

/**
 * Download function for modular construction brochure
 */
export const downloadModularBrochure = async (): Promise<void> => {
  const brochureUrl = 'https://koz5ylkurb.ufs.sh/f/VdVJXQsMkbnqx9QmmwklENdzMShcuIi8s7Qnr16wafHqk5eG';
  await downloadFile(brochureUrl, 'Pristiq-Modular-Brochure.pdf');
}; 