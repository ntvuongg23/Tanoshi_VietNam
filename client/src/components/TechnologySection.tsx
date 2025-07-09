import React, { useState } from 'react';

// Converted from HTML to TSX - Odoo Cost Calculator Component
export default function TechnologySection() {
  // State for managing selected competitors and calculations
  const [selectedCompetitors, setSelectedCompetitors] = useState<string[]>([
    'Asana', 'Quickbooks', 'Salesforce', 'Slack', 'Notion', 'Docusign', 'Wordpress'
  ]);
  const [currentUsers, setCurrentUsers] = useState<number>(20);

  // Competitor pricing data (from HTML reference - exact match)
  const competitorPrices: Record<string, number> = {
    'Asana': 20,
    'Quickbooks': 20,
    'Shopify': 30,
    'Salesforce': 20,
    'Slack': 10,
    'Notion': 20,
    'BambooHR': 40,
    'Docusign': 80,
    'Inflow': 10,
    'Wordpress': 50,
    'Sharepoint': 10,
    'Lightspeed': 20,
    'Expensify': 40,
    'Calendly': 10,
    'Coupa': 20,
    'Hootsuite': 20,
    'Clickup': 50,
    'Hubspot': 10,
    'Harvest': 10,
    'Zendesk': 20,
    'Eventbrite': 8,
    'Katanamrp': 12,
    'Booqable': 20
  };

  // Competitor labels (Vietnamese names from HTML reference - exact match)
  const competitorLabels: Record<string, string> = {
    'Asana': 'Dự án',
    'Quickbooks': 'Kế toán',
    'Shopify': 'Thương mại điện tử',
    'Salesforce': 'CRM',
    'Slack': 'Thảo luận',
    'Notion': 'Kiến thức',
    'BambooHR': 'Nhân sự',
    'Docusign': 'Ký tên',
    'Inflow': 'Tồn kho',
    'Wordpress': 'Trang web',
    'Sharepoint': 'Tài liệu',
    'Lightspeed': 'PoS',
    'Expensify': 'Chi phí',
    'Calendly': 'Cuộc hẹn',
    'Coupa': 'Mua hàng',
    'Hootsuite': 'Xã hội',
    'Clickup': 'Kế hoạch',
    'Hubspot': 'Email',
    'Harvest': 'Chấm công',
    'Zendesk': 'Hỗ trợ',
    'Eventbrite': 'Sự kiện',
    'Katanamrp': 'MRP',
    'Booqable': 'Cho thuê'
  };

  const odooMonthlyPrice = 7.25;

  // Format currency function (from HTML reference)
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount).replace('US$', '') + '\u00A0US$';
  };

  // Calculate total costs (from HTML reference logic)
  const calculateCosts = () => {
    let totalCompetitorCost = 0;
    const competitorList: Array<{name: string, cost: number, isPerUser: boolean}> = [];

    selectedCompetitors.forEach(competitor => {
      const cost = competitorPrices[competitor] || 0;

      if (competitor === 'Quickbooks' || competitor === 'Shopify' || competitor === 'Wordpress') {
        // Fixed cost tools
        totalCompetitorCost += cost;
        competitorList.push({name: competitor, cost, isPerUser: false});
      } else {
        // Per-user tools
        const userCost = cost * currentUsers;
        totalCompetitorCost += userCost;
        competitorList.push({name: competitor, cost: userCost, isPerUser: true});
      }
    });

    // Calculate yearly costs to match HTML reference
    const yearlyCompetitorCost = totalCompetitorCost * 12;
    const yearlyOdooTotalCost = odooMonthlyPrice * currentUsers * 12;
    const yearlySavings = yearlyCompetitorCost - yearlyOdooTotalCost;

    return {
      monthlyCompetitorCost: totalCompetitorCost,
      yearlyCompetitorCost,
      monthlyOdooTotalCost: odooMonthlyPrice * currentUsers,
      yearlyOdooTotalCost,
      monthlySavings: totalCompetitorCost - (odooMonthlyPrice * currentUsers),
      yearlySavings,
      competitorList
    };
  };

  const costs = calculateCosts();

  // Handle competitor selection (converted from HTML event listener)
  const handleCompetitorChange = (competitor: string, checked: boolean) => {
    if (checked) {
      setSelectedCompetitors(prev => [...prev, competitor]);
    } else {
      setSelectedCompetitors(prev => prev.filter(c => c !== competitor));
    }
  };

  // Handle user count change (converted from HTML event listener)
  const handleUserCountChange = (newCount: number) => {
    setCurrentUsers(Math.max(1, newCount));
  };

  // Handle user count input change
  const handleUserCountInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setCurrentUsers(value);
    }
  };

  // State for Odoo Apps switcher (from TechnologySectionRight.html)
  const [showAppsComparison, setShowAppsComparison] = useState(false);

  // Handle apps switcher toggle
  const handleAppsSwitcherChange = (checked: boolean) => {
    setShowAppsComparison(checked);
  };

  // Odoo Apps data (from TechnologySectionRight.html - exact match)
  const odooApps = [
    { name: 'Kế toán', icon: 'https://download.odoocdn.com/icons/accountant/static/description/icon.svg', href: '/vi_VN/app/accounting' },
    { name: 'Kiến thức', icon: 'https://download.odoocdn.com/icons/knowledge/static/description/icon.svg', href: '/vi_VN/app/knowledge' },
    { name: 'Ký tên', icon: 'https://download.odoocdn.com/icons/sign/static/description/icon.svg', href: '/vi_VN/app/sign' },
    { name: 'CRM', icon: 'https://download.odoocdn.com/icons/crm/static/description/icon.svg', href: '/vi_VN/app/crm' },
    { name: 'Studio', icon: 'https://download.odoocdn.com/icons/web_studio/static/description/icon.svg', href: '/vi_VN/app/studio' },
    { name: 'Gói đăng ký', icon: 'https://download.odoocdn.com/icons/sale_subscription/static/description/icon.svg', href: '/vi_VN/app/subscriptions' },
    { name: 'Cho thuê', icon: 'https://download.odoocdn.com/icons/sale_renting/static/description/icon.svg', href: '/vi_VN/app/rental' },
    { name: 'POS', icon: 'https://download.odoocdn.com/icons/point_of_sale/static/description/icon.svg', href: '/vi_VN/app/point-of-sale-shop' },
    { name: 'Thảo luận', icon: 'https://download.odoocdn.com/icons/mail/static/description/icon.svg', href: '/vi_VN/app/discuss' },
    { name: 'Tài liệu', icon: 'https://download.odoocdn.com/icons/documents/static/description/icon.svg', href: '/vi_VN/app/documents' },
    { name: 'Dự án', icon: 'https://download.odoocdn.com/icons/project/static/description/icon.svg', href: '/vi_VN/app/project' },
    { name: 'Bảng chấm công', icon: 'https://download.odoocdn.com/icons/hr_timesheet/static/description/icon.svg', href: '/vi_VN/app/timesheet' },
    { name: 'Dịch vụ hiện trường', icon: 'https://download.odoocdn.com/icons/industry_fsm/static/description/icon.svg', href: '/vi_VN/app/field-service' },
    { name: 'Kế hoạch', icon: 'https://download.odoocdn.com/icons/planning/static/description/icon.svg', href: '/vi_VN/app/planning' },
    { name: 'Hỗ trợ', icon: 'https://download.odoocdn.com/icons/helpdesk/static/description/icon.svg', href: '/vi_VN/app/helpdesk' },
    { name: 'Trang web', icon: 'https://download.odoocdn.com/icons/website/static/description/icon.svg', href: '/vi_VN/app/website' },
    { name: 'Marketing trên MXH', icon: 'https://download.odoocdn.com/icons/social/static/description/icon.svg', href: '/vi_VN/app/social-marketing' },
    { name: 'Marketing qua email', icon: 'https://download.odoocdn.com/icons/mass_mailing/static/description/icon.svg', href: '/vi_VN/app/email-marketing' },
    { name: 'Mua hàng', icon: 'https://download.odoocdn.com/icons/purchase/static/description/icon.svg', href: '/vi_VN/app/purchase' },
    { name: 'Tồn kho', icon: 'https://download.odoocdn.com/icons/stock/static/description/icon.svg', href: '/vi_VN/app/inventory' },
    { name: 'Sản xuất', icon: 'https://download.odoocdn.com/icons/mrp/static/description/icon.svg', href: '/vi_VN/app/manufacturing' },
    { name: 'Bán hàng', icon: 'https://download.odoocdn.com/icons/sale/static/description/icon.svg', href: '/vi_VN/app/sales' },
    { name: 'Nhân viên', icon: 'https://download.odoocdn.com/icons/hr/static/description/icon.svg', href: '/vi_VN/app/employees' },
    { name: 'Trang chủ', icon: 'https://download.odoocdn.com/icons/spreadsheet_dashboard/static/description/icon.svg', href: '/vi_VN/app/spreadsheet' }
  ];

  return (
    <>
      {/* Bootstrap CSS and Font Awesome */}


      {/* Custom CSS styles (converted from HTML <style> tag) */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .x_wd {
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }

        .py-6 {
          padding-top: 3.5rem !important;
          padding-bottom: 3.5rem !important;
        }

        .py-lg-7 {
          padding-top: 4.5rem !important;
          padding-bottom: 4.5rem !important;
        }

        .x_wd_yellow_highlight_bold_02 {
          background: linear-gradient(120deg, #ffd700 0%, #ffed4e 100%);
          background-size: 100% 0.3em;
          background-repeat: no-repeat;
          background-position: 0 88%;
          white-space: nowrap;
          padding: 0 0.2em;
        }

        .x_wd_yellow_highlight_bold_03 {
          background: linear-gradient(120deg, #ffd700 0%, #ffed4e 100%);
          background-size: 100% 0.4em;
          background-repeat: no-repeat;
          background-position: 0 85%;
          white-space: nowrap;
          padding: 0 0.3em;
        }

        .text-o-color-1 {
          color: #714b67 !important;
        }

        .bg-200 {
          background-color: #f8f9fa !important;
        }

        .text-700 {
          color: #495057 !important;
        }

        .text-900 {
          color: #212529 !important;
        }

        .form-check-input:checked {
          background-color: #714b67;
          border-color: #714b67;
        }

        .form-check-label {
          cursor: pointer;
        }

        .form-check-input {
          display: none !important;
        }

        .form-check-label img {
          transition: all 0.3s ease;
          opacity: 0.6;
          background: white;
          border: 2px solid transparent;
        }

        .form-check-input:checked + .form-check-label img {
          opacity: 1;
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(113, 75, 103, 0.3);
          border-color: #714b67;
        }

        .x_wd_cc_minus, .x_wd_cc_plus {
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 3rem;
          min-height: 3rem;
        }

        .x_wd_cc_minus:hover, .x_wd_cc_plus:hover {
          background-color: #714b67 !important;
          color: white !important;
        }

        .display-2 {
          font-size: 3.5rem;
          font-weight: 300;
          line-height: 1.2;
        }

        .display-4 {
          font-size: 2.5rem;
          font-weight: 300;
          line-height: 1.2;
        }

        .border-primary {
          border-color: #714b67 !important;
        }

        .bg-100 {
          background-color: #f1f3f4 !important;
        }

        .fs-5 {
          font-size: 1.25rem !important;
        }

        .fs-6 {
          font-size: 1rem !important;
        }

        .fw-bold {
          font-weight: 700 !important;
        }

        .list-unstyled {
          padding-left: 0;
          list-style: none;
        }

        .d-flex {
          display: flex !important;
        }

        .align-items-center {
          align-items: center !important;
        }

        .justify-content-between {
          justify-content: space-between !important;
        }

        .justify-content-center {
          justify-content: center !important;
        }

        .text-center {
          text-align: center !important;
        }

        .text-nowrap {
          white-space: nowrap !important;
        }

        .mb-0 { margin-bottom: 0 !important; }
        .mb-1 { margin-bottom: 0.25rem !important; }
        .mb-2 { margin-bottom: 0.5rem !important; }
        .mb-4 { margin-bottom: 1.5rem !important; }
        .mb-5 { margin-bottom: 3rem !important; }

        .pb-3 { padding-bottom: 1rem !important; }
        .py-3 { padding-top: 1rem !important; padding-bottom: 1rem !important; }
        .py-5 { padding-top: 3rem !important; padding-bottom: 3rem !important; }
        .px-4 { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
        .px-md-4 { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
        .px-xxl-5 { padding-left: 3rem !important; padding-right: 3rem !important; }
        .p-2 { padding: 0.5rem !important; }
        .p-3 { padding: 1rem !important; }
        .p-4 { padding: 1.5rem !important; }
        .p-sm-5 { padding: 3rem !important; }
        .pt-2 { padding-top: 0.5rem !important; }
        .ps-0 { padding-left: 0 !important; }
        .mx-2 { margin-left: 0.5rem !important; margin-right: 0.5rem !important; }
        .me-auto { margin-right: auto !important; }

        .w-100 { width: 100% !important; }

        .rounded { border-radius: 0.375rem !important; }
        .rounded-1 { border-radius: 0.25rem !important; }

        .shadow-sm {
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
        }

        .img-fluid {
          max-width: 100%;
          height: auto;
        }

        .form-control {
          display: block;
          width: 100%;
          padding: 0.375rem 0.75rem;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          color: #212529;
          background-color: #fff;
          background-image: none;
          border: 1px solid #ced4da;
          border-radius: 0.375rem;
          transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }

        .container {
          width: 100%;
          padding-right: 0.75rem;
          padding-left: 0.75rem;
          margin-right: auto;
          margin-left: auto;
          max-width: 1140px;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          margin-right: -0.75rem;
          margin-left: -0.75rem;
        }

        .col-4 { flex: 0 0 auto; width: 33.33333333%; }
        .col-sm-3 { flex: 0 0 auto; width: 25%; }
        .col-md-2 { flex: 0 0 auto; width: 16.66666667%; }
        .col-lg-2 { flex: 0 0 auto; width: 16.66666667%; }
        .col-lg-2 { flex: 0 0 auto; width: 16.66666667%; }
        .col-lg-3 { flex: 0 0 auto; width: 25%; }
        .col-lg-4 { flex: 0 0 auto; width: 33.33333333%; }
        .col-lg-6 { flex: 0 0 auto; width: 50%; }
        .col-lg-10 { flex: 0 0 auto; width: 83.33333333%; }
        .col-xl-2 { flex: 0 0 auto; width: 16.66666667%; }
        .col-xl-3 { flex: 0 0 auto; width: 25%; }
        .col-xl-4 { flex: 0 0 auto; width: 33.33333333%; }
        .col-xl-6 { flex: 0 0 auto; width: 50%; }
        .col-xl-8 { flex: 0 0 auto; width: 66.66666667%; }
        .col-xxl-7 { flex: 0 0 auto; width: 58.33333333%; }

        [class*="col-"] {
          position: relative;
          width: 100%;
          padding-right: 0.75rem;
          padding-left: 0.75rem;
        }

        @media (min-width: 576px) {
          .col-sm-3 { flex: 0 0 auto; width: 25%; }
          .p-sm-5 { padding: 3rem !important; }
        }

        @media (min-width: 768px) {
          .col-md-2 { flex: 0 0 auto; width: 16.66666667%; }
          .px-md-4 { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
        }

        @media (max-width: 991.98px) {
          /* Mobile: stack columns vertically */
          .col-lg-6 {
            flex: 0 0 auto;
            width: 100%;
            margin-bottom: 2rem;
          }

          /* Adjust apps grid for smaller screens - 3 columns on mobile */
          .x_wd_app_entry.col-lg-4 {
            width: 33.33333333% !important;
          }

          .x_wd_app_entry.col-xl-2 {
            width: 33.33333333% !important;
          }

          .x_wd_app_entry.col-lg-2 {
            width: 33.33333333% !important;
          }

          /* Ensure text alignment on mobile */
          .x_wd_app_entry {
            text-align: center !important;
          }

          .x_wd_app_entry figcaption {
            text-align: center !important;
          }

          /* Responsive pt40 class from HTML reference */
          .pt40 {
            padding-top: 2rem !important;
          }

          /* Hide toggle switch on mobile, show link */
          .col-lg-6.pt40.d-none.d-lg-block {
            display: none !important;
          }

          .col-lg-6.pt40.text-end {
            text-align: center !important;
            padding-top: 1rem !important;
          }

          /* Mobile spacing for cost calculation */
          .col-lg-6.col-xl-6 .ps-lg-4 {
            padding-left: 0 !important;
            margin-top: 2rem;
          }

          /* Reset column spacing on mobile */
          .row .col-lg-6:first-child,
          .row .col-lg-6:last-child {
            padding-left: 15px;
            padding-right: 15px;
          }
        }

        @media (min-width: 992px) {
          .col-lg-2 { flex: 0 0 auto; width: 16.66666667%; }
          .col-lg-3 { flex: 0 0 auto; width: 25%; }
          .col-lg-4 { flex: 0 0 auto; width: 33.33333333%; }
          .col-lg-6 { flex: 0 0 auto; width: 50%; }
          .col-lg-10 { flex: 0 0 auto; width: 83.33333333%; }
          .py-lg-7 {
            padding-top: 5rem !important;
            padding-bottom: 5rem !important;
          }

          /* Show controls on desktop only - matching HTML reference */
          .d-lg-block {
            display: block !important;
          }

          .d-none.d-lg-block {
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
          }

          /* Ensure checkbox is visible on desktop */
          .form-check-input[role="switch"] {
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
          }

          /* Desktop text alignment for apps */
          .x_wd_app_entry {
            text-align: center !important;
          }

          .x_wd_app_entry figure {
            text-align: center !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }

          .x_wd_app_entry figcaption {
            text-align: center !important;
            width: 100% !important;
          }

          /* Desktop column spacing */
          .col-lg-6.col-xl-6 .ps-lg-4 {
            padding-left: 2rem !important;
            margin-top: 0;
          }

          /* Tighter column spacing on desktop */
          .row .col-lg-6:first-child {
            padding-right: 0.75rem !important;
          }

          .row .col-lg-6:last-child {
            padding-left: 0.75rem !important;
          }
        }

        @media (min-width: 1200px) {
          .col-xl-2 { flex: 0 0 auto; width: 16.66666667%; }
          .col-xl-3 { flex: 0 0 auto; width: 25%; }
          .col-xl-4 { flex: 0 0 auto; width: 33.33333333%; }
          .col-xl-6 { flex: 0 0 auto; width: 50%; }

          /* Extra large screen spacing */
          .col-lg-6.col-xl-6 .ps-lg-4 {
            padding-left: 3rem !important;
          }
        }

        @media (min-width: 768px) and (max-width: 991.98px) {
          /* Tablet spacing */
          .col-lg-6.col-xl-6 .ps-lg-4 {
            padding-left: 1rem !important;
            margin-top: 1.5rem;
          }

          .row .col-lg-6:first-child,
          .row .col-lg-6:last-child {
            padding-left: 12px;
            padding-right: 12px;
          }
        }

        @media (min-width: 1400px) {
          .col-xxl-7 { flex: 0 0 auto; width: 58.33333333%; }
          .px-xxl-5 { padding-left: 3rem !important; padding-right: 3rem !important; }
        }

        /* Height matching for columns */
        .h-100 {
          height: 100% !important;
        }

        /* Position utilities */
        .position-relative {
          position: relative !important;
        }

        /* Text styling */
        .text-primary {
          color: #714b67 !important;
        }

        .text-muted {
          color: #6c757d !important;
        }

        .text-decoration-none {
          text-decoration: none !important;
        }

        /* Spacing utilities */
        .me-2 {
          margin-right: 0.5rem !important;
        }

        .me-3 {
          margin-right: 1rem !important;
        }

        .ms-2 {
          margin-left: 0.5rem !important;
        }

        .mt-2 {
          margin-top: 0.5rem !important;
        }

        .mt-4 {
          margin-top: 1.5rem !important;
        }

        .px-3 {
          padding-left: 1rem !important;
          padding-right: 1rem !important;
        }

        /* Alignment utilities */
        .align-top {
          vertical-align: top !important;
        }

        /* Odoo Apps Grid Styling (from TechnologySectionRight.html) */
        .x_wd_app_entry {
          display: block;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.6s ease forwards;
          text-align: center !important;
        }

        .x_wd_app_entry:hover {
          text-decoration: none;
          color: inherit;
          transform: translateY(-5px);
        }

        .x_wd_app_entry figure {
          margin: 0;
          transition: all 0.3s ease;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .x_wd_app_entry figcaption {
          text-align: center !important;
          width: 100%;
          margin: 0 auto;
          padding: 0;
          display: block;
        }

        .x_wd_app_entry img {
          transition: all 0.3s ease;
          border: 2px solid #e9ecef !important;
          width: 80px;
          height: 80px;
          object-fit: contain;
        }

        .x_wd_app_entry:hover img {
          border-color: #714B67 !important;
          transform: scale(1.05);
        }

        .img-thumbnail {
          padding: 0.25rem;
          background-color: #fff;
          border: 1px solid #dee2e6;
          border-radius: 0.375rem;
          max-width: 100%;
          height: auto;
          display: block;
          margin: 0 auto;
        }

        /* Ensure app images are centered */
        .x_wd_app_entry .img-thumbnail {
          margin: 0 auto !important;
          display: block !important;
        }

        .text-truncate {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-align: center !important;
        }

        /* Specific styling for app labels */
        .x_wd_app_entry .text-truncate {
          text-align: center !important;
          margin: 0 auto;
          max-width: 100%;
          display: block;
        }

        .small {
          font-size: 0.875em;
          text-align: center !important;
        }

        /* Ensure app entry small text is centered */
        .x_wd_app_entry .small {
          text-align: center !important;
          display: block;
          width: 100%;
        }

        /* Remove any unwanted margins/padding that could cause misalignment */
        .x_wd_app_entry figure,
        .x_wd_app_entry figcaption,
        .x_wd_app_entry .text-truncate,
        .x_wd_app_entry .small {
          margin-left: 0 !important;
          margin-right: 0 !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }

        /* Ensure consistent spacing */
        .x_wd_app_entry figcaption.text-truncate.small.text-o-color-5 {
          text-align: center !important;
          margin: 0 auto !important;
          padding: 0 !important;
          width: 100% !important;
          max-width: 100% !important;
        }

        .text-o-color-5 {
          color: #6c757d !important;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Apps switched image styling (from TechnologySectionRight.html) */
        .x_wd_apps_switched {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          opacity: 0;
          transition: opacity 0.5s ease;
          max-width: 100%;
          max-height: 650px;
          width: auto;
          height: auto;
        }

        .x_wd_apps_switched.show {
          opacity: 1;
        }

        /* Apps grid container */
        .x_wd_apps_container {
          transition: opacity 0.5s ease;
        }

        /* Switch styling */
        .x_wd_corner_highlight_04 {
          position: relative;
          z-index: 2;
        }

        .x_wd_corner_highlight_04::before {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          background: linear-gradient(135deg, transparent 0%, rgba(241, 187, 98, 0.2) 50%, transparent 100%);
          border-radius: 10px;
          z-index: -1;
        }

        /* Ensure form controls are visible */
        .form-check {
          position: relative;
          z-index: 3;
          min-height: 3rem;
          padding-left: 4rem;
          overflow: visible !important;
        }

        .form-switch {
          padding-left: 4rem !important;
          overflow: visible !important;
        }

        /* Simple form controls styling - matching HTML reference exactly */
        .form-check-input:checked {
          background-color: #714B67 !important;
          border-color: #714B67 !important;
        }

        /* Ensure checkbox is visible with proper styling */
        .form-check-input {
          background-color: #fff !important;
          border: 2px solid #ced4da !important;
          border-radius: 0.375rem !important;
          position: relative !important;
          z-index: 10 !important;
          opacity: 1 !important;
          visibility: visible !important;
          display: block !important;
        }

        .form-check-input:focus {
          border-color: #86b7fe !important;
          outline: 0 !important;
          box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25) !important;
        }

        /* Switch specific styling - matching Bootstrap defaults */
        .form-check-input[role="switch"] {
          background-color: #e9ecef !important;
          border: 2px solid #ced4da !important;
          cursor: pointer !important;
          border-radius: 2em !important;
          margin-left: -3.5rem !important;
          margin-top: 0 !important;
          float: left !important;
          clear: left !important;
        }

        .form-check-input[role="switch"]:checked {
          background-color: #714B67 !important;
          border-color: #714B67 !important;
        }

        /* Label positioning */
        .form-check-label {
          margin-left: 0.5rem !important;
          line-height: 1.5rem !important;
          vertical-align: middle !important;
        }

        .o_rtl_flip {
          transform: scaleX(-1);
        }

        /* Link and icon alignment */
        .d-inline-flex {
          display: inline-flex !important;
        }

        .align-items-center {
          align-items: center !important;
        }

        /* Ensure arrow icon is at the far right */
        .col-lg-6.text-end {
          position: relative;
        }

        .col-lg-6.text-end a {
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
        }

        /* Ensure controls container doesn't clip content */
        .col-lg-6.pt40 {
          overflow: visible !important;
          min-height: 4rem;
        }

        .col-lg-6.pt40.d-none.d-lg-block {
          overflow: visible !important;
        }

        /* Cost calculation column spacing improvements */
        .col-lg-6.col-xl-6 .ps-lg-4 {
          padding-left: 1.5rem !important;
        }

        /* Reduce gap between columns */
        .row .col-lg-6:first-child {
          padding-right: 0.75rem;
        }

        .row .col-lg-6:last-child {
          padding-left: 0.75rem;
        }

        /* Cost calculation styling without background */
        .ps-lg-4 h4,
        .ps-lg-4 .d-flex,
        .ps-lg-4 .text-center {
          color: #212529 !important;
        }

        /* Ensure good contrast for cost calculation text */
        .ps-lg-4 .x_wd_cc_competitor_costs li {
          color: #495057;
          border-bottom: 1px solid #e9ecef;
        }

        /* Separator styling */
        .ps-lg-4 .w-100 {
          opacity: 0.6;
        }

        /* Savings highlight without background dependency */
        .ps-lg-4 .x_wd_yellow_highlight_bold_03 {
          background: linear-gradient(135deg, #f1bb62 0%, #f1bb62 100%);
          color: #212529 !important;
          border-radius: 0.375rem;
        }

        /* Responsive padding class from HTML reference */
        .pt40 {
          padding-top: 2.5rem;
        }

        /* Bootstrap utility classes */
        .d-none {
          display: none !important;
        }

        /* Debugging - make checkbox highly visible */
        #x_wd_apps_switcher {
          background-color: #f8f9fa !important;
          border: 3px solid #714B67 !important;
          box-shadow: 0 0 10px rgba(113, 75, 103, 0.5) !important;
          position: relative !important;
          z-index: 999 !important;
        }

        #x_wd_apps_switcher:checked {
          background-color: #714B67 !important;
          border-color: #714B67 !important;
        }

        /* Final fix for checkbox container */
        .form-check.form-switch.w-auto.text-start.ps-3.x_wd_corner_highlight_04 {
          display: block !important;
          overflow: visible !important;
          min-height: 3rem !important;
          padding-left: 4rem !important;
          position: relative !important;
          z-index: 10 !important;
        }

        .form-check.form-switch.w-auto.text-start.ps-3.x_wd_corner_highlight_04::after {
          content: '';
          display: table;
          clear: both;
        }

        @media (max-width: 991.98px) {
          .pt40 {
            padding-top: 2rem !important;
          }

          .x_wd_apps_switched {
            max-width: 95%;
            max-height: 350px;
          }
        }
        `
      }} />

      {/* Main component JSX (converted from HTML body) - Exact layout match */}
      <section id="x_wd_costs_calculator" className="x_wd py-6 py-lg-7">
        <div id="x_wd_cc_rate" className="d-none" data-rate="1"></div>
        <div id="x_wd_cc_currency" className="d-none" data-currency="USD"></div>
        <div id="x_wd_cc_locale" className="d-none" data-locale="vi_VN"></div>
        <div id="x_wd_cc_odoo_monthly_price" className="d-none" data-odoo-monthly-price="7.250000000000001"></div>

        <div id="comparison" className="container">
          {/* Header - Centered title */}
          <h2 className="display-2 text-center">
            <span className="x_wd_yellow_highlight_bold_02">Tiết kiệm hơn</span> với Odoo
          </h2>
          <p className="text-center mb-5">
            Tiết kiệm chi phí dựa trên giá trung bình trên mỗi người dùng cho từng ứng dụng.
          </p>

          {/* Main layout - 2 columns with cost calculation on right */}
          <div className="row">
            {/* Left Column - Competitor selection and user input */}
            <div className="col-lg-6 col-xl-6">
              <div className="bg-200 rounded p-4 p-sm-5">
                <h4 className="mb-4">Bạn sử dụng ứng dụng nào?</h4>

                {/* Competitors grid - exact order from HTML reference */}
                <div className="row text-center mb-4 pt-2">
                  {/* Row 1 */}
                  <div className="col-4 col-sm-3 col-md-2 col-lg-2 pb-3">
                    <div className="form-check ps-0">
                      <input
                        className="form-check-input d-none"
                        type="checkbox"
                        id="asana"
                        checked={selectedCompetitors.includes('Asana')}
                        onChange={(e) => handleCompetitorChange('Asana', e.target.checked)}
                        data-competitor="Asana"
                      />
                      <label className="form-check-label w-100" htmlFor="asana">
                        <img
                          src="https://odoocdn.com/openerp_website/static/src/img/competitors/asana.svg"
                          className="img-fluid rounded-1 shadow-sm p-3 mb-2"
                          loading="lazy"
                          alt="Asana"
                        />
                        <div className="text-nowrap fw-bold text-700">Dự án</div>
                      </label>
                    </div>
                  </div>

                  <div className="col-4 col-sm-3 col-md-2 col-lg-2 pb-3">
                    <div className="form-check ps-0">
                      <input
                        className="form-check-input d-none"
                        type="checkbox"
                        id="quickbooks"
                        checked={selectedCompetitors.includes('Quickbooks')}
                        onChange={(e) => handleCompetitorChange('Quickbooks', e.target.checked)}
                        data-competitor="Quickbooks"
                        data-cost="20"
                      />
                      <label className="form-check-label w-100" htmlFor="quickbooks">
                        <img
                          src="https://odoocdn.com/openerp_website/static/src/img/competitors/quickbooks.svg"
                          className="img-fluid rounded-1 shadow-sm p-3 mb-2"
                          loading="lazy"
                          alt="Quickbooks"
                        />
                        <div className="text-nowrap fw-bold text-700">Kế toán</div>
                      </label>
                    </div>
                  </div>

                  <div className="col-4 col-sm-3 col-md-2 col-lg-2 pb-3">
                    <div className="form-check ps-0">
                      <input
                        className="form-check-input d-none"
                        type="checkbox"
                        id="shopify"
                        checked={selectedCompetitors.includes('Shopify')}
                        onChange={(e) => handleCompetitorChange('Shopify', e.target.checked)}
                        data-competitor="Shopify"
                        data-cost="30"
                      />
                      <label className="form-check-label w-100" htmlFor="shopify">
                        <img
                          src="https://odoocdn.com/openerp_website/static/src/img/competitors/shopify.svg"
                          className="img-fluid rounded-1 shadow-sm p-3 mb-2"
                          loading="lazy"
                          alt="Shopify"
                        />
                        <div className="text-nowrap fw-bold text-700">Thương mại điện tử</div>
                      </label>
                    </div>
                  </div>

                  <div className="col-4 col-sm-3 col-md-2 col-lg-2 pb-3">
                    <div className="form-check ps-0">
                      <input
                        className="form-check-input d-none"
                        type="checkbox"
                        id="salesforce"
                        checked={selectedCompetitors.includes('Salesforce')}
                        onChange={(e) => handleCompetitorChange('Salesforce', e.target.checked)}
                        data-competitor="Salesforce"
                        data-cost="20"
                      />
                      <label className="form-check-label w-100" htmlFor="salesforce">
                        <img
                          src="https://odoocdn.com/openerp_website/static/src/img/competitors/salesforce.svg"
                          className="img-fluid rounded-1 shadow-sm p-3 mb-2"
                          loading="lazy"
                          alt="Salesforce"
                        />
                        <div className="text-nowrap fw-bold text-700">CRM</div>
                      </label>
                    </div>
                  </div>

                  <div className="col-4 col-sm-3 col-md-2 col-lg-2 pb-3">
                    <div className="form-check ps-0">
                      <input
                        className="form-check-input d-none"
                        type="checkbox"
                        id="slack"
                        checked={selectedCompetitors.includes('Slack')}
                        onChange={(e) => handleCompetitorChange('Slack', e.target.checked)}
                        data-competitor="Slack"
                        data-cost="10"
                      />
                      <label className="form-check-label w-100" htmlFor="slack">
                        <img
                          src="https://odoocdn.com/openerp_website/static/src/img/competitors/slack.svg"
                          className="img-fluid rounded-1 shadow-sm p-3 mb-2"
                          loading="lazy"
                          alt="Slack"
                        />
                        <div className="text-nowrap fw-bold text-700">Thảo luận</div>
                      </label>
                    </div>
                  </div>

                  <div className="col-4 col-sm-3 col-md-2 col-lg-2 pb-3">
                    <div className="form-check ps-0">
                      <input
                        className="form-check-input d-none"
                        type="checkbox"
                        id="notion"
                        checked={selectedCompetitors.includes('Notion')}
                        onChange={(e) => handleCompetitorChange('Notion', e.target.checked)}
                        data-competitor="Notion"
                        data-cost="20"
                      />
                      <label className="form-check-label w-100" htmlFor="notion">
                        <img
                          src="https://odoocdn.com/openerp_website/static/src/img/competitors/notion.svg"
                          className="img-fluid rounded-1 shadow-sm p-3 mb-2"
                          loading="lazy"
                          alt="Notion"
                        />
                        <div className="text-nowrap fw-bold text-700">Kiến thức</div>
                      </label>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="col-4 col-sm-3 col-md-2 col-lg-2 pb-3">
                    <div className="form-check ps-0">
                      <input
                        className="form-check-input d-none"
                        type="checkbox"
                        id="bamboohr"
                        checked={selectedCompetitors.includes('BambooHR')}
                        onChange={(e) => handleCompetitorChange('BambooHR', e.target.checked)}
                        data-competitor="BambooHR"
                        data-cost="40"
                      />
                      <label className="form-check-label w-100" htmlFor="bamboohr">
                        <img
                          src="https://odoocdn.com/openerp_website/static/src/img/competitors/bamboohr.svg"
                          className="img-fluid rounded-1 shadow-sm p-3 mb-2"
                          loading="lazy"
                          alt="BambooHR"
                        />
                        <div className="text-nowrap fw-bold text-700">Nhân sự</div>
                      </label>
                    </div>
                  </div>

                  <div className="col-4 col-sm-3 col-md-2 col-lg-2 pb-3">
                    <div className="form-check ps-0">
                      <input
                        className="form-check-input d-none"
                        type="checkbox"
                        id="docusign"
                        checked={selectedCompetitors.includes('Docusign')}
                        onChange={(e) => handleCompetitorChange('Docusign', e.target.checked)}
                        data-competitor="Docusign"
                        data-cost="80"
                      />
                      <label className="form-check-label w-100" htmlFor="docusign">
                        <img
                          src="https://odoocdn.com/openerp_website/static/src/img/competitors/docusign.svg"
                          className="img-fluid rounded-1 shadow-sm p-3 mb-2"
                          loading="lazy"
                          alt="Docusign"
                        />
                        <div className="text-nowrap fw-bold text-700">Ký tên</div>
                      </label>
                    </div>
                  </div>

                  <div className="col-4 col-sm-3 col-md-2 col-lg-2 pb-3">
                    <div className="form-check ps-0">
                      <input
                        className="form-check-input d-none"
                        type="checkbox"
                        id="inflow"
                        checked={selectedCompetitors.includes('Inflow')}
                        onChange={(e) => handleCompetitorChange('Inflow', e.target.checked)}
                        data-competitor="Inflow"
                        data-cost="10"
                      />
                      <label className="form-check-label w-100" htmlFor="inflow">
                        <img
                          src="https://odoocdn.com/openerp_website/static/src/img/competitors/inflow.svg"
                          className="img-fluid rounded-1 shadow-sm p-3 mb-2"
                          loading="lazy"
                          alt="Inflow"
                        />
                        <div className="text-nowrap fw-bold text-700">Tồn kho</div>
                      </label>
                    </div>
                  </div>

                  <div className="col-4 col-sm-3 col-md-2 col-lg-2 pb-3">
                    <div className="form-check ps-0">
                      <input
                        className="form-check-input d-none"
                        type="checkbox"
                        id="wordpress"
                        checked={selectedCompetitors.includes('Wordpress')}
                        onChange={(e) => handleCompetitorChange('Wordpress', e.target.checked)}
                        data-competitor="Wordpress"
                        data-cost="50"
                      />
                      <label className="form-check-label w-100" htmlFor="wordpress">
                        <img
                          src="https://odoocdn.com/openerp_website/static/src/img/competitors/wordpress.svg"
                          className="img-fluid rounded-1 shadow-sm p-3 mb-2"
                          loading="lazy"
                          alt="Wordpress"
                        />
                        <div className="text-nowrap fw-bold text-700">Trang web</div>
                      </label>
                    </div>
                  </div>

                  <div className="col-4 col-sm-3 col-md-2 col-lg-2 pb-3">
                    <div className="form-check ps-0">
                      <input
                        className="form-check-input d-none"
                        type="checkbox"
                        id="sharepoint"
                        checked={selectedCompetitors.includes('Sharepoint')}
                        onChange={(e) => handleCompetitorChange('Sharepoint', e.target.checked)}
                        data-competitor="Sharepoint"
                        data-cost="10"
                      />
                      <label className="form-check-label w-100" htmlFor="sharepoint">
                        <img
                          src="https://odoocdn.com/openerp_website/static/src/img/competitors/sharepoint.svg"
                          className="img-fluid rounded-1 shadow-sm p-3 mb-2"
                          loading="lazy"
                          alt="Sharepoint"
                        />
                        <div className="text-nowrap fw-bold text-700">Tài liệu</div>
                      </label>
                    </div>
                  </div>

                  <div className="col-4 col-sm-3 col-md-2 col-lg-2 pb-3">
                    <div className="form-check ps-0">
                      <input
                        className="form-check-input d-none"
                        type="checkbox"
                        id="lightspeed"
                        checked={selectedCompetitors.includes('Lightspeed')}
                        onChange={(e) => handleCompetitorChange('Lightspeed', e.target.checked)}
                        data-competitor="Lightspeed"
                        data-cost="20"
                      />
                      <label className="form-check-label w-100" htmlFor="lightspeed">
                        <img
                          src="https://odoocdn.com/openerp_website/static/src/img/competitors/lightspeed.svg"
                          className="img-fluid rounded-1 shadow-sm p-3 mb-2"
                          loading="lazy"
                          alt="Lightspeed"
                        />
                        <div className="text-nowrap fw-bold text-700">PoS</div>
                      </label>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="col-4 col-sm-3 col-md-2 col-lg-2 pb-3">
                    <div className="form-check ps-0">
                      <input
                        className="form-check-input d-none"
                        type="checkbox"
                        id="expensify"
                        checked={selectedCompetitors.includes('Expensify')}
                        onChange={(e) => handleCompetitorChange('Expensify', e.target.checked)}
                        data-competitor="Expensify"
                        data-cost="40"
                      />
                      <label className="form-check-label w-100" htmlFor="expensify">
                        <img
                          src="https://odoocdn.com/openerp_website/static/src/img/competitors/expensify.svg"
                          className="img-fluid rounded-1 shadow-sm p-3 mb-2"
                          loading="lazy"
                          alt="Expensify"
                        />
                        <div className="text-nowrap fw-bold text-700">Chi phí</div>
                      </label>
                    </div>
                  </div>

                  <div className="col-4 col-sm-3 col-md-2 col-lg-2 pb-3">
                    <div className="form-check ps-0">
                      <input
                        className="form-check-input d-none"
                        type="checkbox"
                        id="calendly"
                        checked={selectedCompetitors.includes('Calendly')}
                        onChange={(e) => handleCompetitorChange('Calendly', e.target.checked)}
                        data-competitor="Calendly"
                        data-cost="10"
                      />
                      <label className="form-check-label w-100" htmlFor="calendly">
                        <img
                          src="https://odoocdn.com/openerp_website/static/src/img/competitors/calendly.svg"
                          className="img-fluid rounded-1 shadow-sm p-3 mb-2"
                          loading="lazy"
                          alt="Calendly"
                        />
                        <div className="text-nowrap fw-bold text-700">Cuộc hẹn</div>
                      </label>
                    </div>
                  </div>

                  <div className="col-4 col-sm-3 col-md-2 col-lg-2 pb-3">
                    <div className="form-check ps-0">
                      <input
                        className="form-check-input d-none"
                        type="checkbox"
                        id="coupa"
                        checked={selectedCompetitors.includes('Coupa')}
                        onChange={(e) => handleCompetitorChange('Coupa', e.target.checked)}
                        data-competitor="Coupa"
                        data-cost="20"
                      />
                      <label className="form-check-label w-100" htmlFor="coupa">
                        <img
                          src="https://odoocdn.com/openerp_website/static/src/img/competitors/coupa.svg"
                          className="img-fluid rounded-1 shadow-sm p-3 mb-2"
                          loading="lazy"
                          alt="Coupa"
                        />
                        <div className="text-nowrap fw-bold text-700">Mua hàng</div>
                      </label>
                    </div>
                  </div>

                  <div className="col-4 col-sm-3 col-md-2 col-lg-2 pb-3">
                    <div className="form-check ps-0">
                      <input
                        className="form-check-input d-none"
                        type="checkbox"
                        id="hootsuite"
                        checked={selectedCompetitors.includes('Hootsuite')}
                        onChange={(e) => handleCompetitorChange('Hootsuite', e.target.checked)}
                        data-competitor="Hootsuite"
                        data-cost="20"
                      />
                      <label className="form-check-label w-100" htmlFor="hootsuite">
                        <img
                          src="https://odoocdn.com/openerp_website/static/src/img/competitors/hootsuite.svg"
                          className="img-fluid rounded-1 shadow-sm p-3 mb-2"
                          loading="lazy"
                          alt="Hootsuite"
                        />
                        <div className="text-nowrap fw-bold text-700">Xã hội</div>
                      </label>
                    </div>
                  </div>

                  <div className="col-4 col-sm-3 col-md-2 col-lg-2 pb-3">
                    <div className="form-check ps-0">
                      <input
                        className="form-check-input d-none"
                        type="checkbox"
                        id="clickup"
                        checked={selectedCompetitors.includes('Clickup')}
                        onChange={(e) => handleCompetitorChange('Clickup', e.target.checked)}
                        data-competitor="Clickup"
                        data-cost="50"
                      />
                      <label className="form-check-label w-100" htmlFor="clickup">
                        <img
                          src="https://odoocdn.com/openerp_website/static/src/img/competitors/clickup.svg"
                          className="img-fluid rounded-1 shadow-sm p-3 mb-2"
                          loading="lazy"
                          alt="Clickup"
                        />
                        <div className="text-nowrap fw-bold text-700">Kế hoạch</div>
                      </label>
                    </div>
                  </div>

                  <div className="col-4 col-sm-3 col-md-2 col-lg-2 pb-3">
                    <div className="form-check ps-0">
                      <input
                        className="form-check-input d-none"
                        type="checkbox"
                        id="hubspot"
                        checked={selectedCompetitors.includes('Hubspot')}
                        onChange={(e) => handleCompetitorChange('Hubspot', e.target.checked)}
                        data-competitor="Hubspot"
                        data-cost="10"
                      />
                      <label className="form-check-label w-100" htmlFor="hubspot">
                        <img
                          src="https://odoocdn.com/openerp_website/static/src/img/competitors/hubspot.svg"
                          className="img-fluid rounded-1 shadow-sm p-3 mb-2"
                          loading="lazy"
                          alt="Hubspot"
                        />
                        <div className="text-nowrap fw-bold text-700">Email</div>
                      </label>
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div className="col-4 col-sm-3 col-md-2 col-lg-2 pb-3">
                    <div className="form-check ps-0">
                      <input
                        className="form-check-input d-none"
                        type="checkbox"
                        id="harvest"
                        checked={selectedCompetitors.includes('Harvest')}
                        onChange={(e) => handleCompetitorChange('Harvest', e.target.checked)}
                        data-competitor="Harvest"
                        data-cost="10"
                      />
                      <label className="form-check-label w-100" htmlFor="harvest">
                        <img
                          src="https://odoocdn.com/openerp_website/static/src/img/competitors/harvest.svg"
                          className="img-fluid rounded-1 shadow-sm p-3 mb-2"
                          loading="lazy"
                          alt="Harvest"
                        />
                        <div className="text-nowrap fw-bold text-700">Chấm công</div>
                      </label>
                    </div>
                  </div>

                  <div className="col-4 col-sm-3 col-md-2 col-lg-2 pb-3">
                    <div className="form-check ps-0">
                      <input
                        className="form-check-input d-none"
                        type="checkbox"
                        id="zendesk"
                        checked={selectedCompetitors.includes('Zendesk')}
                        onChange={(e) => handleCompetitorChange('Zendesk', e.target.checked)}
                        data-competitor="Zendesk"
                        data-cost="20"
                      />
                      <label className="form-check-label w-100" htmlFor="zendesk">
                        <img
                          src="https://odoocdn.com/openerp_website/static/src/img/competitors/zendesk.svg"
                          className="img-fluid rounded-1 shadow-sm p-3 mb-2"
                          loading="lazy"
                          alt="Zendesk"
                        />
                        <div className="text-nowrap fw-bold text-700">Hỗ trợ</div>
                      </label>
                    </div>
                  </div>

                  <div className="col-4 col-sm-3 col-md-2 col-lg-2 pb-3">
                    <div className="form-check ps-0">
                      <input
                        className="form-check-input d-none"
                        type="checkbox"
                        id="eventbrite"
                        checked={selectedCompetitors.includes('Eventbrite')}
                        onChange={(e) => handleCompetitorChange('Eventbrite', e.target.checked)}
                        data-competitor="Eventbrite"
                        data-cost="8"
                      />
                      <label className="form-check-label w-100" htmlFor="eventbrite">
                        <img
                          src="https://odoocdn.com/openerp_website/static/src/img/competitors/eventbrite.svg"
                          className="img-fluid rounded-1 shadow-sm p-3 mb-2"
                          loading="lazy"
                          alt="Eventbrite"
                        />
                        <div className="text-nowrap fw-bold text-700">Sự kiện</div>
                      </label>
                    </div>
                  </div>

                  <div className="col-4 col-sm-3 col-md-2 col-lg-2 pb-3">
                    <div className="form-check ps-0">
                      <input
                        className="form-check-input d-none"
                        type="checkbox"
                        id="katanamrp"
                        checked={selectedCompetitors.includes('Katanamrp')}
                        onChange={(e) => handleCompetitorChange('Katanamrp', e.target.checked)}
                        data-competitor="Katanamrp"
                        data-cost="12"
                      />
                      <label className="form-check-label w-100" htmlFor="katanamrp">
                        <img
                          src="https://odoocdn.com/openerp_website/static/src/img/competitors/katanamrp.svg"
                          className="img-fluid rounded-1 shadow-sm p-3 mb-2"
                          loading="lazy"
                          alt="Katanamrp"
                        />
                        <div className="text-nowrap fw-bold text-700">MRP</div>
                      </label>
                    </div>
                  </div>

                  <div className="col-4 col-sm-3 col-md-2 col-lg-2 pb-3">
                    <div className="form-check ps-0">
                      <input
                        className="form-check-input d-none"
                        type="checkbox"
                        id="booqable"
                        checked={selectedCompetitors.includes('Booqable')}
                        onChange={(e) => handleCompetitorChange('Booqable', e.target.checked)}
                        data-competitor="Booqable"
                        data-cost="20"
                      />
                      <label className="form-check-label w-100" htmlFor="booqable">
                        <img
                          src="https://odoocdn.com/openerp_website/static/src/img/competitors/booqable.svg"
                          className="img-fluid rounded-1 shadow-sm p-3 mb-2"
                          loading="lazy"
                          alt="Booqable"
                        />
                        <div className="text-nowrap fw-bold text-700">Cho thuê</div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* User count selector - matching HTML reference exactly */}
                <h4 className="me-auto mb-4">Bạn có bao nhiêu người dùng?</h4>
                <div className="d-flex align-items-center">
                  <a
                    className="x_wd_cc_minus rounded-1 bg-white text-o-color-1 shadow-sm py-3 px-4"
                    aria-label="Gỡ một"
                    title="Gỡ một"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleUserCountChange(currentUsers - 1);
                    }}
                  >
                    <i className="fa fa-minus"></i>
                  </a>
                  <input
                    type="number"
                    min="1"
                    value={currentUsers}
                    name="Users"
                    className="form-control text-center border-primary bg-100 fs-5 fw-bold mx-2"
                    style={{width: '5rem'}}
                    onChange={handleUserCountInputChange}
                  />
                  <a
                    href="#"
                    className="x_wd_cc_plus rounded-1 bg-white text-o-color-1 shadow-sm py-3 px-4"
                    aria-label="Thêm một"
                    title="Thêm một"
                    onClick={(e) => {
                      e.preventDefault();
                      handleUserCountChange(currentUsers + 1);
                    }}
                  >
                    <i className="fa fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Cost Calculation Table */}
            <div className="col-lg-6 col-xl-6">
              <div className="ps-lg-4">
                <h4 className="mb-0">Ứng dụng</h4>
                <div className="d-flex justify-content-between">
                  <span>dành cho <b className="x_wd_cc_nb_users">{currentUsers}</b> người dùng</span>
                  <span>/tháng</span>
                </div>

                <img
                  src="https://odoocdn.com/openerp_website/static/src/img/apps/crm/separator.svg"
                  className="w-100 my-3"
                  alt=""
                  loading="lazy"
                />

                {/* Selected competitors list */}
                <ul className="x_wd_cc_competitor_costs list-unstyled mb-0">
                  {costs.competitorList.map((item, index) => (
                    <li key={index} className="d-flex align-items-center justify-content-between fs-6 py-2">
                      <span>{item.name}</span>
                      <span>{formatCurrency(item.cost)}</span>
                    </li>
                  ))}
                </ul>

                <img
                  src="https://odoocdn.com/openerp_website/static/src/img/apps/crm/separator.svg"
                  className="w-100 my-3"
                  alt=""
                  loading="lazy"
                />

                {/* Total competitor costs */}
                <div className="d-flex align-items-center justify-content-between fs-5 fw-bold mb-4">
                  <span>TỔNG</span>
                  <div><span className="x_wd_cc_competitor_total">{formatCurrency(costs.yearlyCompetitorCost)}</span>/năm</div>
                </div>

                {/* Odoo costs */}
                <h4 className="mb-0 x_wd_cc_odoo_plan">All Odoo Apps</h4>
                <div className="mb-3">dành cho <b className="x_wd_cc_nb_users">{currentUsers}</b> người dùng</div>

                <img
                  src="https://odoocdn.com/openerp_website/static/src/img/apps/crm/separator.svg"
                  className="w-100 my-3"
                  alt=""
                  loading="lazy"
                />

                <div className="d-flex align-items-center justify-content-between fs-5 fw-bold mb-4">
                  <span>TỔNG</span>
                  <div><span className="x_wd_cc_odoo_total">{formatCurrency(costs.yearlyOdooTotalCost)}</span>/năm</div>
                </div>

                {/* Savings display */}
                <div className="text-center">
                  <h3 className="display-4 mb-0">Bạn tiết kiệm</h3>
                  <div className="x_wd_yellow_highlight_bold_03 display-4 text-900 p-2 mb-1">
                    <span className="x_wd_cc_savings_total">{formatCurrency(costs.yearlySavings)}</span>/năm
                  </div>
                  <p className="mb-0">Cho một phần mềm tích hợp hoàn chỉnh.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Odoo Apps Grid Section - Separate row below */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="bg-200 rounded p-4 p-sm-5 h-100 position-relative">
                {/* Apps Switched Image (Initially Hidden) */}
                <img
                  src="https://odoocdn.com/openerp_website/static/src/img/apps/home/apps_switched.svg"
                  className={`x_wd_apps_switched ${showAppsComparison ? 'show' : ''}`}
                  alt="Apps Comparison"
                  loading="lazy"
                />

                {/* Apps Grid Container */}
                <div className="x_wd_apps_container">
                  <h4 className="mb-4 text-center">Ứng dụng Odoo</h4>
                  <div className="row mt-5 mt-md-6" id="odoo-apps-grid">
                    {odooApps.map((app, index) => (
                      <a
                        key={index}
                        className="x_wd_app_entry col-4 col-sm-3 col-lg-2 text-center mb-3 p-0"
                        href={app.href}
                        style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                      >
                        <figure>
                          <img
                            className="img-thumbnail rounded-1 mb-3"
                            src={app.icon}
                            alt={`Odoo ${app.name} icon`}
                            loading="lazy"
                            style={{ width: '80px', height: '80px', objectFit: 'contain' }}
                          />
                          <figcaption className="text-truncate small text-o-color-5">
                            {app.name}
                          </figcaption>
                        </figure>
                      </a>
                    ))}

                    {/* Controls - matching HTML reference exactly */}
                    <div className="col-lg-6 pt40 d-none d-lg-block">
                      <div className="form-check form-switch w-auto text-start ps-3 x_wd_corner_highlight_04">
                        <input
                          className="form-check-input m-0"
                          type="checkbox"
                          role="switch"
                          id="x_wd_apps_switcher"
                          checked={showAppsComparison}
                          onChange={(e) => handleAppsSwitcherChange(e.target.checked)}
                          style={{ width: '3rem', height: '1.5rem' }}
                        />
                        <label className="form-check-label fw-bold text-o-color-1 px-3" htmlFor="x_wd_apps_switcher">
                          Nếu không dùng Odoo
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-6 pt40 text-end">
                      <a href="/vi_VN/page/all-apps" className="text-decoration-none d-inline-flex align-items-center">
                        Xem tất cả ứng dụng
                        <img
                          src="https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_03.svg"
                          width="40px"
                          className="align-top o_rtl_flip ms-2"
                          alt=""
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
